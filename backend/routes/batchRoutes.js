const express = require('express');
const { getBatches, getCentres } = require('../controllers/batchController');

const router = express.Router();

router.get('/batches', getBatches);
router.get('/centres', getCentres);

module.exports = router;
