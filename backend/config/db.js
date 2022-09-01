const mongoose = require('mongoose');
const keys = require('./key');

const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect(keys.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDb connected on host: ${mongoDB.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

module.exports = { connectDB };
