package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

type Film struct {
	Title    string
	Director string
}

func main() {
	fmt.Println("hello world")

	h1 := func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("index.html"))
		films := map[string][]Film{
			"Films":{
				{Title: "Planeta dos Macacos 1", Director: "Quentin Tarantino"},
				{Title: "Planeta dos Macacos 2", Director: "Quentin Tarantino"},
				{Title: "Planeta dos Macacos 3", Director: "Quentin Tarantino"},
			},
		}
		tmpl.Execute(w, films)
	}
	http.HandleFunc("/", h1)

	log.Fatal(http.ListenAndServe(":8000", nil))
}
