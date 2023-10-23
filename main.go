package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

type Film struct {
}

func main() {
	fmt.Println("hello world")

	h1 := func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("index.html"))
		tmpl.Execute(w, nil)
	}
	http.HandleFunc("/", h1)

	log.Fatal(http.ListenAndServe(":8000", nil))
}
