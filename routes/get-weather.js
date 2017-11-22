'use strict';

require('dotenv').config();
const getLocation = require('./locate.js');
const createRecord  = require('../model/create-record.js');
const saveRecord = require('../model/save-record.js');

// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

// weather request
let getWeather = module.exports = () => {
  getLocation()
    .then(createRecord)
    .then(saveRecord)
    .catch(err => console.log(err.message));
};

// getWeather();
