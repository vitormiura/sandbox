from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

prods = {
    1:{"item":"hoho", "price":1, "quantity":143},
    2:{"item":"dawdd", "price":2, "quantity":13},
    3:{"item":"bololo", "price":55, "quantity":43},
    4:{"item":"uii", "price":72, "quantity":3},
}

# class Item(BaseModel):
#     name: str
#     price: float
#     is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return "Hello World!"

@app.get("/prods")
def vendas():
    return {"products":len(prods)}

@app.get("/prods/{id_prod}")
def get_prod(id_prod:int):
    if id_prod in prods:
        return prods[id_prod]
    else:
        return {"Error":"ID not found"}

# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: Item):
#     return {"item_name": item.name, "item_id": item_id}