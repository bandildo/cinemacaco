package database

type Vote struct {
	UserID   string `json:"userId"`
	GameID   string `json:"gameId"`
	ThumbsUp bool   `json:"thumbsUp"`
}

func CreateVote(vote Vote) {
	db.Table("votes").Create(&vote)
}
