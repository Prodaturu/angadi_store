import express from 'express';

import mongoose from 'mongoose';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", createProduct);

// GET route to fetch all products
router.get("/", getProducts);

router.put	("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;