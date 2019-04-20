package main

import (
	"backend/api/controllers"
	"fmt"
	"log"
	"net/http"
	"os"

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
	votesRouter.HandleFunc("/user/{id}/active", controllers.UserHasVoted).Methods("GET")

	headersOk := handlers.AllowedHeaders([]string{"Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"OPTIONS", "GET", "HEAD", "POST", "DELETE"})
	log.Fatal(http.ListenAndServe(getPort(), handlers.CORS(originsOk, headersOk, methodsOk)(router)))
}

func getPort() string {
	var port = os.Getenv("PORT")
	// Set a default port if there is nothing in the environment
	if port == "" {
		port = "8080"
		fmt.Println("INFO: No PORT environment variable detected, defaulting to " + port)
	}
	return ":" + port
}

func main() {
	handleRequests()
}
