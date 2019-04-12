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

	if currentGame == nil {
		w.WriteHeader(http.StatusNotFound)
	} else {
		json.NewEncoder(w).Encode(currentGame)
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

	database.StartNewGame(game)

	w.WriteHeader(http.StatusCreated)
}
