const express = require('express');
// imports connection to the database and holds it with a variable
const db = require('./config/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

// serving static files from the public directory
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// listens for the open event, which happens when the database is connected successfully
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});