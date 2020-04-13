require('dotenv').config()

const Server = require('../src/server');

const port = process.env.PORT || 80;

Server.start(port);
