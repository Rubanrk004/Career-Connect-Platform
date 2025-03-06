require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
        if (!process.env.DB) {
            throw new Error("MONGO_URI is not defined in .env file");
        }

        const data = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Database connected successfully at server ${data.connection.host}`);
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = databaseConnection;
