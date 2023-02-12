from importlib.metadata import Session
from fastapi import FastApi

app = FastApi()

#DATABASE_URL:"postgresql://monkeytest:monkeytest222@127.0.0.1:5432/dbtest"
#database = databases.Database(DATABASE_URL)
#metadata = sqlalchemy.MetaData()

@app.get('/monkeys')
def find_all_monkeys():
    return "List all monkeys"