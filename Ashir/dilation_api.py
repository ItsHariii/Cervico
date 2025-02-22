from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
from fastapi import FastAPI
from pydantic import BaseModel

# Load DeepSeek Model
model_name = "deepseek-ai/deepseek-llm-7b-chat"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype=torch.float16, device_map="auto")

# FastAPI App
app = FastAPI()

# Define input format
class SensorData(BaseModel):
    pressure_mmHg: float
    stretch_mm: float
    temperature_C: float

# Define DeepSeek-powered prediction route
@app.post("/predict")
def predict_dilation(data: SensorData):
    # Prepare input prompt for DeepSeek
    prompt = f"""
    A pregnant patient has these sensor readings:
    - Cervical Pressure: {data.pressure_mmHg} mmHg
    - Cervical Stretch: {data.stretch_mm} mm
    - Body Temperature: {data.temperature_C} °C

    Predict the cervical dilation stage. Choose from:
    - Early Labor
    - Active Labor
    - Transition Stage

    Provide a short explanation based on medical knowledge.
    """

    # Generate response using DeepSeek
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, max_length=100)
    response_text = tokenizer.decode(outputs[0], skip_special_tokens=True)

    return {"dilation_prediction": response_text}

# Run API using: uvicorn dilation_api:app --reload
