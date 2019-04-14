package main

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/golang-migrate/migrate/database/postgres"

	"github.com/DavidHuie/gomigrate"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "admin"
	dbname   = "cinemacaco_dev"
)

func main() {

	direction := os.Args[1]

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")

	migrator, _ := gomigrate.NewMigrator(db, gomigrate.Postgres{}, "./migrations")

	var migrationError error
	if direction == "-down" {
		migrationError = migrator.Rollback()
	} else {
		migrationError = migrator.Migrate()
	}

	if migrationError != nil {
		panic(err)
	}
}