from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.post("/contact")
async def contact(form: ContactForm):
    # In a real app, send an email or save to DB
    return {"message": "Your message has been sent. Thank you!"}
