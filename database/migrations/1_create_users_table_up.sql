CREATE TABLE users (
    uid text NOT NULL,
    email text NOT NULL,
    admin boolean DEFAULT false,
    macaco boolean DEFAULT false
);