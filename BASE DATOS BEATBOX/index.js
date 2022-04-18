const express = require('express');
const {connect} = require('./utils/db')
const cors =require("cors")

const songsRouter = require('./routes/song.routes')
const artistsRouter = require('./routes/artist.routes')

connect();

const PORT = 5000;
const server = express();

server.use(

  cors({

    origin: "*",

    credentials: true,

  })

);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/songs', songsRouter);
server.use('/artist', artistsRouter)

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});