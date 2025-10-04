const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('static'));

mongoose.connect(process.env.MONGO_URI, {UseNewUserParser: true, UseUnifiedTopology: true})
.then(() =>console.log("Connected to MongoDB"))
.catch(()=> console.log("Error connecting to MongoDB"));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
