from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/search")
async def search(request: Request):
    body = await request.json()
    query = body.get("query")
    print(f"Received from frontend: {query}")
    return {"message": f"You searched for: {query}"}