const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// .env config
require('dotenv').config();

// app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongoose Middleware
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

// Routes
const employeesRouter = require('./routes/employees');

app.use('/employees', employeesRouter);


app.listen(port, () => {
  console.log(`Server is runnig in port: ${port}`);
})