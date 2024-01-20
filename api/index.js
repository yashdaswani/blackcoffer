

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./Models/dataSchema');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connect = () => {
    mongoose
      .connect(
        "mongodb+srv://yashdaswani2504:JLSC1yYBw76WyRHV@cluster1.flp4dhe.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("DB connected");
      })
      .catch((err) => {
        throw err;
      });
  };



  app.get('/api/data', async (req, res) => {
    try {
      const data = await DataModel.find({});
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(PORT, () => {
    connect()
  console.log(`Server is running on http://localhost:${PORT}`);
});
