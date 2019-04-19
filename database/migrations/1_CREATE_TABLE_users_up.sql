CREATE TABLE users
(
    id text PRIMARY KEY,
    email text NOT NULL,
    admin boolean DEFAULT false,
    macaco boolean DEFAULT false
);