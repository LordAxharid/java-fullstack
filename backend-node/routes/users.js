const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definición de las rutas
router.get('/data', userController.getAllUsers);


module.exports = router;
