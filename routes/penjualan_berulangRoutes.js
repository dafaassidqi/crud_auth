const express = require('express');
const router = express.Router();
const penjualan_berulangController = require('../controllers/penjualan_berulangController');
const protectPenjualan_Berulang = require('../middleware/authMiddleware');

/** User **/
/*router.post('/register', userController.register);
router.post('/login', userController.login);**/
router.get('/penjualan_berulang', protectPenjualan_Berulang, penjualan_berulangController.getAll);
router.get('/penjualan_berulang/:id', protectPenjualan_Berulang, penjualan_berulangController.getOne);
router.put('/penjualan_berulang/:id', protectPenjualan_Berulang, penjualan_berulangController.update);
router.delete('/penjualan_berulang/:id', protectPenjualan_Berulang, penjualan_berulangController.remove);
/** **/

module.exports = router;