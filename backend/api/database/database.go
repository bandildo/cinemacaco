package database

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"

	_ "github.com/golang-migrate/migrate/database/postgres"
)

var db *gorm.DB //database
var err error

func init() {
	dbURL := os.Getenv("DATABASE_URL")

	if dbURL == "" {
		dbURL = fmt.Sprintf("host=%s port=%d user=%s "+
			"password=%s dbname=%s sslmode=disable",
			host, port, user, password, dbname)
	}

	db, err = gorm.Open("postgres", dbURL)

	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")
}
