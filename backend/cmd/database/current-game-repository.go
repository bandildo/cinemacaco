package database

import (
	"time"

	"github.com/jinzhu/gorm"
)

type CurrentGame struct {
	ID         string    `json:"id"`
	Name       string    `json:"name"`
	Started    time.Time `json:"started"`
	MacacoVote bool      `json:"macacoVote"`
}

type Vote struct {
	UserID   string `json:"userId"`
	ThumbsUp bool   `json:"thumbsUp"`
}

func GetCurrentGame() *CurrentGame {
	game := &CurrentGame{}

	err := db.Table("currentgame").First(game).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		panic(err)
	}

	if err == gorm.ErrRecordNotFound {
		return nil
	}

	return game
}

func DeleteCurrentGame() error {
	return db.Table("currentgame").Delete(CurrentGame{}).Error
}

func CreateNewGame(newGame CurrentGame) {
	db.Table("currentgame").Create(&newGame)
}

func UpdateCurrentGameVote(vote Vote) {
	currentGame := &CurrentGame{}

	db.Table("currentgame").First(currentGame)

	currentGame.MacacoVote = vote.ThumbsUp
	db.Table("currentgame").Save(currentGame)
}

func CreateNewVote(vote Vote) {
	db.Table("currentvotes").Create(&vote)
}
