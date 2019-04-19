package controllers

import (
	"backend/cmd/database"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
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

func UserHasVoted(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	userVotes := database.GetActiveVotesForUser(params["id"])
	hasVoted := len(*userVotes) > 0

	json.NewEncoder(w).Encode(hasVoted)
}
