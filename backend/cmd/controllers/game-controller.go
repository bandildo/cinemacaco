package controllers

import (
	"backend/cmd/database"
	"encoding/json"
	"net/http"

	uuid "github.com/rs/xid"
)

func GetActiveGame(w http.ResponseWriter, r *http.Request) {
	activeGame := database.GetActiveGame()

	json.NewEncoder(w).Encode(activeGame)
}

func EndCurrentGame(w http.ResponseWriter, r *http.Request) {
	database.DeactivateGames()

	w.WriteHeader(http.StatusAccepted)
}

func StartNewGame(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var game database.Game
	err := decoder.Decode(&game)
	if err != nil {
		panic(err)
	}

	game.ID = uuid.New().String()
	game.Active = true

	database.CreateGame(game)

	w.WriteHeader(http.StatusCreated)
}
