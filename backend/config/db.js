import mongoose from 'mongoose';

// connect to MongoDB
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI); // connect to MongoDB
		console.log(`MongoDB Connected: ${conn.connection.host}`); // log connection host
	} catch (error) {
		console.error(`Error: ${error.message}`); // log error message
		process.exit(1); // exit with failure
	}
};