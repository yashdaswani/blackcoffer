const mongoose = require('mongoose');

// Replace this with the path to your JSON file
const jsonData = require('');
const DataModel = require('./Models/dataSchema');

// Define your DataModel schema and model here


const seedDatabase = async () => {
  try {
    await DataModel.insertMany(jsonData);
    console.log('Database seeded successfully')
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();



        