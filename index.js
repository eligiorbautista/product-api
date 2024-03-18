const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongo_user = process.env.MONGO_USER;
const mongo_password = process.env.MONGO_PASSWORD;
const router = require('./src/routes/product_route.js');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/product', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});

const mongo_uri = `mongodb+srv://${mongo_user}:${mongo_password}@backenddb.rbhgzmh.mongodb.net/Node-API`

mongoose
    .connect(mongo_uri)
    .then(() => console.log('Successfully connected to MongoDB server...'))
    .catch(err => console.log('Failed to connect to MongoDB server:', err));
