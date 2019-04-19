CREATE TABLE votes
(
    user_id text,
    game_id text,
    thumbs_up boolean DEFAULT null,

    PRIMARY KEY (user_id, game_id)
)