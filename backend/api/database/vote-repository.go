package database

type Vote struct {
	UserID   string `json:"userId"`
	GameID   string `json:"gameId"`
	ThumbsUp bool   `json:"thumbsUp"`
}

func CreateVote(vote Vote) {
	db.Table("votes").Create(&vote)
}

func GetActiveVotesForUser(userId string) *[]Vote {
	activeGame := *GetActiveGame()

	var votes []Vote

	db.Table("votes").Where("user_id = ? AND game_id = ?", userId, activeGame.ID).Find(&votes)

	return &votes
}
