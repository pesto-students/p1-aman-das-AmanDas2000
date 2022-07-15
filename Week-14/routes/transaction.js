const express = require('express');
const { addTransaction,getBalance, getDebit, getCredit, getSavings } = require('../controller/expense');
const requireSignin = require('../middleware');
const router = express.Router();



router.post('/add', requireSignin, addTransaction);
router.get('/balance', requireSignin, getBalance);
router.get('/debit', requireSignin, getDebit);
router.get('/credit', requireSignin, getCredit);
router.get('/savings', requireSignin, getSavings);

module.exports = router;