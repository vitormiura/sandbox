use actix_web::{get, post, put, delete, web, Responder, HttpResponse};
use crate::{AppState, TodoListEntry};
use super::models::{CreateEntryData, UpdateEntryData};

#[get("/todolist/entries")]
async fn get_entries(data: web::Data<AppState>) -> impl Responder {
    HttpResponse::Ok().json(data.todolist_entries.lock().unwrap().to_vec())
}

#[post("/todolist/entries")]
async fn create_entry(data: web::Data<AppState>, param_obj: web::Json<CreateEntryData>) -> impl Responder {
    
} 