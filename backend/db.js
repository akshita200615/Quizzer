// backend/db.js
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    // --- BEFORE (with warnings) ---
    /*
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    */

    // --- AFTER (clean and no warnings) ---
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;