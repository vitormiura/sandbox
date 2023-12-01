use serde::Deserialize;

#[derive(Deserialize, Clone)]
pub struct CreateEntryData {
    pub title: String,
    pub date: i64,
}

#[derive(Deserialize, Clone)]
pub struct UpdateEntryData {
    pub title: String,
}


