const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuroutes');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());

const cors = require("cors");; 



app.use(express.json());

app.use(
  cors({ 
    origin: ['https://deepnetsoft-task.vercel.app'],
  })
);

app.use("/menus", menuRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


mongoose.connect(process.env.CONN_STRING,)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));