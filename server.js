// REQUIRED DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// App + PORT + Database URL
const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URI = process.env.MONGODB_URI || process.env.DB_URI;

app.use(cors());

const covidRoutes = require('./routes/data-routes');
app.use(covidRoutes);

// Connect to MongoDB -- Local Database
mongoose.connect(
  CONNECTION_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('DB connection successful!')
);

// Listen to the server
app.listen(PORT, () => console.log(`Listening...http://localhost:${PORT}`));
