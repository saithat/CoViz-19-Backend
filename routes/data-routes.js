const express = require('express');
const router = express.Router();
const Data = require('../models/Data');
const allData = require('../models/All-Data');
const usData = require('../models/US-Data');
const countriesData = require('../models/Countries-Data');

// Re-route to /api to show thw data
router.get('/', async (req, res) => {
  return res.redirect('/api');
});

router.get('/api', async (req, res) => {
  try {
    const covidData = await Data.find();
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/api/:id', async (req, res) => {
  try {
    const covidData = await Data.find({ location_id: req.params.id });
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/all', async (req, res) => {
  try {
    const covidData = await allData.find();
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/countries', async (req, res) => {
  try {
    const covidData = await countriesData.find();
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/countries/:country', async (req, res) => {
  var countryCap = '';
  if (req.params.country.length === 3) {
    countryCap = req.params.country.toUpperCase();
  } else {
    countryCap =
      req.params.country.charAt(0).toUpperCase() + req.params.country.slice(1);
  }

  try {
    const covidData = await countriesData.find({ country: countryCap });
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/states', async (req, res) => {
  try {
    const covidData = await usData.find();
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/states/:state', async (req, res) => {
  var stateCap = req.params.state.toLowerCase().split(' ');
  for (var i = 0; i < stateCap.length; i++) {
    stateCap[i] =
      stateCap[i].charAt(0).toUpperCase() + stateCap[i].substring(1);
  }

  try {
    const covidData = await usData.find({ state: stateCap.join(' ') });
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
