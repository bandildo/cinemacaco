package controllers

import (
	"backend/cmd/database"
	"encoding/json"
	"net/http"
)

func CastVote(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var vote database.Vote
	err := decoder.Decode(&vote)
	if err != nil {
		panic(err)
	}

	database.CreateVote(vote)

	w.WriteHeader(http.StatusAccepted)
}
