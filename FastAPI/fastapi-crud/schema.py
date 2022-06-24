from typing import Optional
from pydantic import BaseModel


class MonkeyBase(BaseModel):
    monkey_name: str
    monkey_age: int
    species: str
    gender: str

class MonkeyAdd(MonkeyBase):
    pass