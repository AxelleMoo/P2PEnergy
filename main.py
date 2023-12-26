from fastapi import FastAPI, File, UploadFile, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
import os

app = FastAPI()

# Enable CORS
# origins = ["http://localhost", "http://localhost:3000"]  
vm_ip = os.environ.get("VM_IP", "localhost")  # Use "localhost" as a default if VM_IP is not set
origins = [f"http://{vm_ip}", f"http://{vm_ip}:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # You can restrict this to specific HTTP methods if needed
    allow_headers=["*"],  # You can restrict this to specific headers if needed
)


@app.post("/upload")
async def upload_file(
    csvFile: UploadFile = File(...),
    selectedProvider: str = Form(...),
    selectedContract: str = Form(...)
    ):
    try:
        # Read CSV data from the uploaded file
        csv_data = await csvFile.read()

        
        # Convert CSV data to Pandas DataFrame
        df = pd.read_csv(io.StringIO(csv_data.decode()), sep=';')

        # Hard coded for now
        #extraction is engfie flow variabel for now
        # extraction_price = [0.18, 0.194, 0.156, 0.151, 0.122, 0.137, 0.12, 0.139, 0.142, 0.133, 0.139, 0.153]
        extraction_price = [0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21]
        contract_prices = {
            'Engie FLOW variabel': {
                'Injection_price': [0.082, 0.09, 0.068, 0.066, 0.05, 0.058, 0.057, 0.07, 0.072, 0.066, 0.069, 0.078],
            },
            'Engie DIRECT variabel': {
                'Injection_price': [0.06, 0.066, 0.05, 0.049, 0.037, 0.043, 0.035, 0.042, 0.043, 0.04, 0.042, 0.043],
            },
            'Engie EASY variabel': {
                'Injection_price': [0.195, 0.096, 0.08, 0.063, 0.059, 0.049, 0.052, 0.045, 0.052, 0.045, 0.052, 0.052, 0.063, 0.056],
            },
            'Engie EASY vast': {
                'Injection_price': [0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051],
            },
            'Engie DRIVE vast': {
                'Injection_price': [0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051, 0.051],
            },
            'Eneco zon & wind flex': {
                'Injection_price': [0.097, 0.106, 0.081, 0.078, 0.059, 0.069, 0.056, 0.068, 0.07, 0.064, 0.068, 0.068],
            },
            'Eneco zon & wind vast': {
                'Injection_price': [0.097, 0.106, 0.081, 0.078, 0.059, 0.069, 0.056, 0.068, 0.07, 0.064, 0.068, 0.068],
            },

        }
        injection_price = contract_prices[selectedContract]['Injection_price']
        p2p_price = [(extraction + injection) / 2 for extraction, injection in zip(extraction_price, injection_price)]
        print(p2p_price)
        df['Volume'] = pd.to_numeric(df['Volume'].str.replace(',', '.'))
        df['Van Datum'] = pd.to_datetime(df['Van Datum'], format='%d/%m/%Y')

        injectie_df = df[df['Register'].str.contains('Injectie') & (df['Validatiestatus'] == 'Gevalideerd')]
        df_injectie_2023 = injectie_df[injectie_df['Van Datum'].dt.year == 2023]

        df_injectie_2023['Month'] = df_injectie_2023['Van Datum'].dt.to_period('M')

        monthly_sum_df_2023 = df_injectie_2023.groupby('Month')['Volume'].sum().reset_index()

        monthly_sum_df_2023['Injection price/kWh'] = injection_price
        monthly_sum_df_2023['P2P price/kWh'] = p2p_price

        monthly_sum_df_2023['P2P Billing'] = monthly_sum_df_2023['Volume'] * monthly_sum_df_2023['P2P price/kWh']
        monthly_sum_df_2023['Normal Billing'] = monthly_sum_df_2023['Volume'] * monthly_sum_df_2023['Injection price/kWh']
        monthly_sum_df_2023['Savings'] = monthly_sum_df_2023['P2P Billing'] - monthly_sum_df_2023['Normal Billing']

        total_savings = monthly_sum_df_2023['Savings'].sum()

        return {"message": "Calculation completed successfully",
                "value": total_savings}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
