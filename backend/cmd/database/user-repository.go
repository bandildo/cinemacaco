package database

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	UID    string `json:"uid"`
	Email  string `json:"email"`
	Admin  bool   `json:"admin"`
	Macaco bool   `json:"macaco"`
}

func GetUser(uid string) *User {
	user := &User{}

	err := db.Table("users").Where("uid = ?", uid).First(user).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		panic(err)
	}

	if err == gorm.ErrRecordNotFound {
		return nil
	}

	return user
}

func RegisterUser(user User) {
	db.Create(&user)
}
