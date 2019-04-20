package controllers

import (
	"backend/api/database"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func LoginUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	user := database.GetUser(params["id"])

	if user == nil {
		w.WriteHeader(http.StatusNotFound)
	} else {
		json.NewEncoder(w).Encode(user)
	}
}

func NewUser(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var user database.User
	err := decoder.Decode(&user)
	if err != nil {
		panic(err)
	}

	database.RegisterUser(user)

	w.WriteHeader(http.StatusCreated)
}
