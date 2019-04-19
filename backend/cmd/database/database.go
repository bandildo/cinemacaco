package database

import (
	"fmt"
	"os"

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
	dbUrl := os.Getenv("DATABASE_URL")

	if dbUrl == "" {
		dbUrl = fmt.Sprintf("host=%s port=%d user=%s "+
			"password=%s dbname=%s sslmode=disable",
			host, port, user, password, dbname)
	}

	db, err = gorm.Open("postgres", dbUrl)

	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")
}
