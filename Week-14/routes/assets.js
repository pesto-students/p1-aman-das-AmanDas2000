const express = require('express');
const { updateAssets, getAssets } = require('../controller/assets');
const requireSignin = require('../middleware');
const router = express.Router();



router.post('/update', requireSignin, updateAssets);
router.get('/info', requireSignin, getAssets );

module.exports = router;