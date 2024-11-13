// const express = require('express');
import express from 'express';

import dotenv from 'dotenv';

//imports previously created connectDB function from db.js
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js";

// load environment variables
dotenv.config(); // load .env file into process.env
const PORT = process.env.PORT || 5000; // set PORT environment variable to 5000

const app = express();

// parses and allows us to use JSON data in request body
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	connectDB(); // connect to MongoDB
	console.log('\nServer started at port 5000, access through http://localhost:' + PORT + '\n'); // log message
});
