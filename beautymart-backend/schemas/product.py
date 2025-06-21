from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    price: float
    category: str
    brand: str
    skin_type: str

class ProductOut(ProductCreate):
    id: int
    class Config:
        orm_mode = True
