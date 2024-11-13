import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {

    try {
        const products = await Product.find({}); // fetch all products from MongoDB
        res.status(200).json({ success: 'true', data: products }); // return the products data
    } catch (error) {
        console.error("Error in fetching products: ", error.message); // log error message
        res.status(500).json({ success: 'false', message: error.message }); // return error message
	}

}

export const createProduct = async (req, res) => {

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
		console.error("Error in Create product: ", error.message); // log error message
		res.status(500).json({ success: 'false', message: error.message }); // return error message
	}
}

export const updateProduct = async (req, res) => {

	const { id } = req.params;

	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No product with id: ${id}`);
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: 'true', data: updatedProduct });
	} catch (error) {
		console.error("Error in updating product: ", error.message);
		res.status(500).json({ success: 'false', message: error.message });
	}
}

export const deleteProduct = async (req, res) => {

	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`No product with id: ${id}`);
	}

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: 'true', message: 'Product deleted successfully' });
	} catch (error) {
		console.error("Error in delete product: ", error.message);
		res.status(500).json({ success: 'false', message: error.message });
	}

}