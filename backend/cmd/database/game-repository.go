package database

import (
	"github.com/jinzhu/gorm"
)

type Game struct {
	ID     string `json:"id"`
	Name   string `json:"name"`
	Active bool   `json:"active"`
}

func GetActiveGame() *Game {
	var game Game

	err := db.Table("games").Where("active = true").First(&game).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		panic(err)
	}

	if err == gorm.ErrRecordNotFound {
		return nil
	}

	return &game
}

func CreateGame(game Game) {
	db.Table("games").Create(&game)
}

func DeactivateGames() {
	db.Table("games").Where("active = true").Update("active", "false")
}
