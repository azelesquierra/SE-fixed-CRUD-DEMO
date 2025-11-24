console.log("🔄 DEBUG VERSION - db.js is loaded!");

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // HARDCODE THE CONNECTION STRING TEMPORARILY
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://mongodemo:PASS123456789@cluster0.sqlks2ak.mongodb.net/clinic?retryWrites=true&w=majority&appName=Cluster0';
    
    console.log('=== DEBUGGING DB CONNECTION ===');
    console.log('MongoDB URI:', mongoURI);
    console.log('URI Type:', typeof mongoURI);
    console.log('All environment variables:', Object.keys(process.env));
    console.log('================================');
    
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.log('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;