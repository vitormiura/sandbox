package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	fmt.Println("hello world")

	h1 := func(w http.ResponseWriter, r *http.Request) {
		io.WriteString(w, "Hello World")
		io.WriteString(w, r.Method)
	}
	http.HandleFunc("/", h1)

	log.Fatal(http.ListenAndServe(":8000", nil))
}
