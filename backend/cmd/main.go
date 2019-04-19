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
	gamesRouter.HandleFunc("", controllers.StartNewGame).Methods("POST")
	gamesRouter.HandleFunc("/active", controllers.GetActiveGame).Methods("GET")
	gamesRouter.HandleFunc("/active", controllers.EndCurrentGame).Methods("DELETE")

	votesRouter := router.PathPrefix("/votes").Subrouter()
	votesRouter.HandleFunc("", controllers.CastVote).Methods("POST")

	headersOk := handlers.AllowedHeaders([]string{"Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"OPTIONS", "GET", "HEAD", "POST", "DELETE"})
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}

func main() {
	handleRequests()
}
