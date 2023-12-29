const crypto = require("crypto")
const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: [true, "Vul je voornaam in aub"]
    },
    lastname:{
        type:String,
        required: [true, "Vul je achternaam in aub"]
    },
    email:{
        type: String,
        required: [true, "Vul je email in aub"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Vull je email in aub"]
    },
    role: {
        type: String,
        enum: ["prosument", "consument", "admin"],
        required: [true, "Laat weten of je prosument of consument bent aub"]
    },
    password:{
        type: String,
        required: [true, "Vul je wachtwoord in aub"],
        minlength: 8,
        select: false,
    },
    passwordConfirm:{
        type: String,
        required: [true, "Valideer je wachtwoord aub"],
        validate: {
            validator: function(el){
                return el === this.password 
            },
            message: "Wachtwoord is niet hetzelfde"
        },
    },
    bankAccount:{
        type: String,
        validate: [validator.isIBAN, "Dit is geen geldig IBAN nummer"]
    },
    eanCode:{
        type: String,
    },
    provider:{
        type: String,
    },
    contract:{
        type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }

})

userSchema.pre("save", async function(next){
    if(!this.isModified("password ")) return next();

    this.password = await bycrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();
});

userSchema.pre(/^find/, function(next){
    this.find({active: {$ne: false}});
    next();
})

userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
){
    return await bycrypt.compare(candidatePassword, userPassword);
}
  
userSchema.methods.changedPasswordAfter = function(JWTTimestamp){

    if(this.passwordChangedAt){
        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime()/ 1000, 10);

        return JWTTimestamp < changedTimeStamp;
    }

    //by default we want to return false
    return false;
}

userSchema.methods.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    console.log({resetToken}, this.passwordResetToken)

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

const User = mongoose.model("User", userSchema);

module.exports = User;