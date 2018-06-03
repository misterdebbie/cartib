const express = require('express');
//bring in express
const moviesController = require('../controllers/movies-controller');
//specify this file for controller code
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.index);

module.exports = moviesRouter;
