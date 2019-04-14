package controllers

import (
	"backend/cmd/database"
	"encoding/json"
	"net/http"
	"time"

	uuid "github.com/rs/xid"
)

func GetCurrentGame(w http.ResponseWriter, r *http.Request) {
	currentGame := database.GetCurrentGame()

	json.NewEncoder(w).Encode(currentGame)
}

func EndCurrentGame(w http.ResponseWriter, r *http.Request) {
	error := database.DeleteCurrentGame()

	if error == nil {
		w.WriteHeader(http.StatusAccepted)
	} else {
		w.WriteHeader(http.StatusInternalServerError)
	}
}

func StartNewGame(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var game database.CurrentGame
	err := decoder.Decode(&game)
	if err != nil {
		panic(err)
	}

	game.ID = uuid.New().String()
	game.Started = time.Now()

	database.CreateNewGame(game)

	w.WriteHeader(http.StatusCreated)
}

func CastMacacoVote(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var vote database.Vote
	err := decoder.Decode(&vote)
	if err != nil {
		panic(err)
	}

	database.UpdateCurrentGameVote(vote)

	w.WriteHeader(http.StatusAccepted)
}

func CastHumanVote(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var vote database.Vote
	err := decoder.Decode(&vote)
	if err != nil {
		panic(err)
	}

	database.CreateNewVote(vote)

	w.WriteHeader(http.StatusAccepted)
}