from sqlalchemy.orm import Session
from models.product import Product
from schemas.product import ProductCreate

def create_product(db: Session, product: ProductCreate):
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def get_all_products(db: Session):
    return db.query(Product).all()

def get_filtered_products(db: Session, brand=None, skin_type=None):
    query = db.query(Product)
    if brand:
        query = query.filter(Product.brand == brand)
    if skin_type:
        query = query.filter(Product.skin_type == skin_type)
    return query.all()
