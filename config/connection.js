// import mongoose
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

// connect to database on mongodb
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dnrbros.k1cdbgr.mongodb.net/${process.env.DB_NAME}`, {
    // options added to avoid deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;