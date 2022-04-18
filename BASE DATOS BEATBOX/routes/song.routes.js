const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', async (req, res, next) => {
	try {
		const songs = await Song.find();
		return res.status(200).json(songs)
	} catch (err) {
		return next(error);
	}
});

router.get('/id/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const song = await Song.findById(id);
		if (song) {
			return res.status(200).json(song);
		} else {
			return res.status(404).json('No song found by this id. Try again.');
		}
	} catch (err) {
		return next(error);
	}
});

router.get('/title/:title', async (req, res, next) => {
	const {title} = req.params;

	try {
		const songByTitle = await Song.find({ title });
		return res.status(200).json(songByTitle);
	} catch (err) {
		return next(error);
	}
});

router.get('/artist/:artist', async (req, res, next) => {
	const {artist} = req.params;

	try {
		const songByArtist = await Song.find({ artist });
		return res.status(200).json(songByArtist);
	} catch (err) {
		return next(error);
	}
});

router.get('/year/:year', async (req, res, next) => {
	const {year} = req.params;

	try {
		const songByYear = await Song.find({ year: {$gt:year} });
		return res.status(200).json(songByYear);
	} catch (err) {
		return next(error);
	}
});

router.post('/create', async (req, res, next) => {
    try {
        const newSong = new Song({
            title: req.body.title,
            year: req.body.year,
            artist: req.body.artist,
            reproductions: req.body.reproductions,
        });

        const createdSong = await newSong.save();
        return res.status(201).json(createdSong);
    } catch (error) {
        return next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const songDeleted = await Song.findByIdAndDelete(id);
        return res.status(200).json(songDeleted);
    } catch (error) {
        return next(error);
    }
});

router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const songModify = new Song(req.body) 
        songModify._id = id 
        const songUpdated = await Song.findByIdAndUpdate(id , songModify)
        return res.status(200).json(songUpdated)
    } catch (error) {
        return next(error)
    }
});


module.exports = router;