CREATE TABLE games
(
    id text PRIMARY KEY,
    name text NOT NULL,
    active boolean DEFAULT false
)