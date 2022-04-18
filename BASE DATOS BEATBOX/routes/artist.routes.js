const express = require('express');
const Artist = require('../models/artist');
const router = express.Router();
// const { upload, uploadToCloudinary } =require("../../middlewares/file.middleware")

router.get('/', async (req, res, next) => {
	try {
		const artists = await Artist.find();
		return res.status(200).json(artists)
	} catch (error) {
		return next(error)
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const artists = await Artist.findById(req.params.id);
		return res.status(200).json(artists)
	} catch (error) {
		return next(error)
	}
});

router.post('/newArtist', async (req, res, next) => {
    console.log('newArtist')
    try{
        const newArtist = new Artist({
            name: req.body.name,
            year: req.body.year,
            genre: req.body.genre,
            albums: req.body.albums,
            image:req.body.image,
        });

        const createdArtist = await newArtist.save();
        return res.status(201).json(createdArtist);
    }catch(error){
        return next(error)
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const artistDeleted = await Artist.findByIdAndDelete(id);
        return res.status(200).json(artistDeleted);
    }catch(error){
        return next(error)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params; //  también es id para pillar el link
        const artistModify = new Artist(req.body);
        artistModify._id = id;
        const updatedArtist = await Artist.findByIdAndUpdate(
            id, artistModify,
            { new: true }
        );
        return res.status(200).json(updatedArtist);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;