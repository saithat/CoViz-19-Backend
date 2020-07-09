const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.get('/', async (req, res) => {
  return res.redirect('/api');
});

// Shows all the data
router.get('/api', async (req, res) => {
  try {
    const covidData = await Data.find();
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

// Shows data of the given location_id
router.get('/api/:id', async (req, res) => {
  try {
    const covidData = await Data.find({ location_id: req.params.id });
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

// -----(FOR TESTING)-----
router.post('/api/post', (req, res) => {
  const data = new Data({
    iso_code: 'Ban',
    continent: 'Asia',
    location: 'Bangladesh',
    location_id: '10',
    date: '2019-1-10',
    total_cases: 5,
    new_cases: 1,
    total_deaths: 3,
  });

  data
    .save()
    .then((info) => {
      res.json(info);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
