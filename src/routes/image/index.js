import express from 'express';

/**
 * Get all images
 */
const downloadImage = async (req, res) => {
	try {
		res.json();
	} catch (error) {
		res.error(error);
	}
};


export default express
	.Router()
	.get('/', downloadImage);
