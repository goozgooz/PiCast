'use strict';

require('dotenv').config();
const getLocation = require('./locate.js');
const createRecord  = require('../model/create-record.js');
const saveRecord = require('../model/save-record.js');
const cleanDB = require('../model/cleardb.js');
const mongoose = require('mongoose');

// weather request
let getWeather = module.exports = () => {
  getLocation()
    .then(createRecord)
    .then(saveRecord)
    .then(cleanDB)
    .catch(err => {
      console.log(err.message);
      mongoose.disconnect();
    });
};

// getWeather();
