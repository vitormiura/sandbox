from sqlalchemy import Column, String, Integer

from database_handler import Base

class Monkeys(Base):
    __tablename__ = "monkey"
    id = Column(Integer, primary_key=True, autoincrement=True, index=True, nullable=False)
    monkey_id = Column(String, unique=True, index=True, nullable=False)
    monkey_name = Column(String(255), index=True, nullable=False)
    monkey_age = Column(Integer, index=True, nullable=False)
    species = Column(String(255), index=True, nullable=False)
    gender = Column(String(1), index=True, nullable=False)
