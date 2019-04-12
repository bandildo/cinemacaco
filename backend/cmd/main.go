package main

import (
	"backend/cmd/controllers"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func handleRequests() {

	router := mux.NewRouter()
	fmt.Println("Started CINEMACACO backend")

	usersRouter := router.PathPrefix("/users").Subrouter()
	usersRouter.HandleFunc("/login/{id}", controllers.LoginUser).Methods("GET")
	usersRouter.HandleFunc("/new", controllers.NewUser).Methods("POST")

	gamesRouter := router.PathPrefix("/games").Subrouter()
	gamesRouter.HandleFunc("/current", controllers.GetCurrentGame).Methods("GET")
	gamesRouter.HandleFunc("/current", controllers.StartNewGame).Methods("POST")
	gamesRouter.HandleFunc("/current", controllers.EndCurrentGame).Methods("DELETE")

	headersOk := handlers.AllowedHeaders([]string{"Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"OPTIONS", "GET", "HEAD", "POST", "DELETE"})
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}

func main() {
	handleRequests()
}
