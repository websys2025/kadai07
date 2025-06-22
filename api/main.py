from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from api.routers import task, done

app = FastAPI()
app.include_router(task.router) 
app.include_router(done.router)
app.mount("/frontapp", StaticFiles(directory="frontapp"), name="frontapp")