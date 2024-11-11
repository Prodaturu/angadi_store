import mongoose from "mongoose";

// create a product schema -> define structure of the document
/**
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {string} image - The URL of the product image.
 * @property {Date} createdAt - The date when the product was created.
 * @property {Date} updatedAt - The date when the product was last updated.
 */
const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	image: {
		type: String,
		required: true,
	}
}, {
	timestamps: true, // createdAt and updatedAt fields created automatically
});

// create a model based on the schema
// we should not use products as the collection name because it is a reserved keyword in MongoDB
const Product = mongoose.model('Product', productSchema);

export default Product;

