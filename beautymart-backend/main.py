from fastapi import FastAPI
from database import Base, engine
from routers import product

app = FastAPI()

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app.include_router(product.router)
