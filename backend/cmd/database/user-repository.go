package database

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	ID     string `json:"id"`
	Email  string `json:"email"`
	Admin  bool   `json:"admin"`
	Macaco bool   `json:"macaco"`
}

func GetUser(id string) *User {
	var user User

	err := db.Table("users").Where("id = ?", id).First(&user).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		panic(err)
	}

	if err == gorm.ErrRecordNotFound {
		return nil
	}

	return &user
}

func RegisterUser(user User) {
	db.Create(&user)
}
