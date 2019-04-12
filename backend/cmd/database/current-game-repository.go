package database

import (
	"time"

	"github.com/jinzhu/gorm"
)

type CurrentGame struct {
	ID      string    `json:"id"`
	Name    string    `json:"name"`
	Started time.Time `json:"started"`
}

func GetCurrentGame() *CurrentGame {
	game := &CurrentGame{}

	err := GetDB().Table("currentgame").First(game).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		panic(err)
	}

	if err == gorm.ErrRecordNotFound {
		return nil
	}

	return game
}

func DeleteCurrentGame() error {
	return GetDB().Table("currentgame").Delete(CurrentGame{}).Error
}

func StartNewGame(newGame CurrentGame) {
	GetDB().Table("currentgame").Create(&newGame)
}
