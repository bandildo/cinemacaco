package main

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/golang-migrate/migrate/database/postgres"

	"github.com/DavidHuie/gomigrate"
)

func main() {

	path := os.Args[1]
	direction := os.Args[2]

	dbURL := os.Getenv("DATABASE_URL")

	if dbURL == "" {
		dbURL = fmt.Sprintf("host=%s port=%d user=%s "+
			"password=%s dbname=%s sslmode=disable",
			host, port, user, password, dbname)
	}
	db, err := sql.Open("postgres", dbURL)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")

	migrator, _ := gomigrate.NewMigrator(db, gomigrate.Postgres{}, path)

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
