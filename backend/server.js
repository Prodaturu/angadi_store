// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// load environment variables
dotenv.config(); // load .env file into process.env

const app = express();

// app.get('/', (req, res) => {
// 	res.send('Dev Server is ready');
// });

// post is used to add data to the server
// in this case we are adding a product to the server (product name, price, image)
// from the frontend, we will send a request to this endpoint to add a product
app.post('/products', async (req, res) => {
	// get product data from user through request body
	const product = req.body;

	// check if product data is valid
	if (!product || !product.name || !product.price || !product.image) {
		return res.status(400).json({ success: 'false', message: 'Product data is invalid' });
	}

	// create a product in MongoDB
	const newProduct = new Product(product);

	try {
		await newProduct.save(); // save the product to MongoDB
		res.status(201).json({ success: 'true', data: newProduct }); // return the product data
	} catch (error) {
		console.log("error in Create product", error.message); // log error message
		res.status(500).json({ success: 'false', message: error.message }); // return error message
	}
});

// test connection to MongoDB
let test_connection = '\n' + process.env.MONGO_URI + '\n';
console.log(test_connection);

// listen to port 5000 for incoming requests
app.listen(5000, () => {
	connectDB(); // connect to MongoDB
	console.log('Server started at port 5000, access through http://localhost:5000');
});
