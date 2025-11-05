from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas.ai_schema import QuestionRequest, AIResponse
from ai_service import get_ai_response

app = FastAPI(title="AI Study Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend del AI Study Assistant funcionando correctamente."}

@app.post("/ask", response_model=AIResponse)
async def ask_ai(request: QuestionRequest):
    response = get_ai_response(request.question)
    return AIResponse(response=response)