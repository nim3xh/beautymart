from dotenv import load_dotenv
import os

load_dotenv()  # Loads variables from .env

DATABASE_URL = os.getenv("DATABASE_URL")
