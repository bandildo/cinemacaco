package database

import (
	"fmt"

	"github.com/jinzhu/gorm"

	_ "github.com/golang-migrate/migrate/database/postgres"
)

var db *gorm.DB //database
var err error

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "admin"
	dbname   = "cinemacaco_dev"
)

func init() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err = gorm.Open("postgres", psqlInfo)

	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")
}

//returns a handle to the DB object
func GetDB() *gorm.DB {
	return db
}
