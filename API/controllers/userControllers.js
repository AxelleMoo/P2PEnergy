
const User = require("./../models/userModel");
const AppError = require('../Utils/appError');
const catchAsync = require('./../Utils/catchAsync')


const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    })

    return newObj;
}

exports.updateMe = catchAsync(async(req, res, next) => {
    if(req.body.password || req.body.passwordConfirm){
        return next(new AppError("This route is not for updating your password", 400))
    }

    const filteredBody = filterObj(req.body, "name", "email");

    const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
        new: true,
        runValidators: true
    });


    res.status(200).json({
        status: "success",
        data: {
            user: updateUser
        }
    })
})


exports.deleteMe = catchAsync(async(req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, {active: false});

    res.status(204).json({
        status: "Success",
        data: null,
    })
})

exports.getAllUsers = catchAsync(async (req,res) => {
    const users = await User.find();
    
    //SEND QUERY
    res.status(200).json({
        status: "success", 
        results: users.length,
        data: {
            users,
        },
    });
})

exports.createUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
}

exports.getSingleUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
}

exports.updateUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
}

exports.deleteUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
}