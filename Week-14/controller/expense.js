const Transaction = require('../models/transaction');
const User = require('../models/user');

const addTransaction = (req, res) => {
  const { date, amount } = req.body;
  const newTransaction = new Transaction({
    amount,
    date,
    user: req.user._id,
  });

  newTransaction.save((err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'failure',
        error: err,
      });
    }
    User.findByIdAndUpdate(
      req.user._id,
      {
        $inc: { balance: amount },
      },
      {
        new: true,
      },
    ).exec((err, user) => {
      if (err) {
        return res.status(500).json({
          message: 'failure during updating balance',
          error: err,
        });
      }
      res.status(200).json({
        message: 'success',
        result: result,
        user: user,
      });
    });
  });
};

const getBalance = (req, res) => {
  const user = req.user._id;

  User.findById(user).exec((err, user) => {
    if (err) {
      return res.status(500).json({
        message: 'unable to find user',
        error: err,
      });
    }

    res.status(200).json({
      message: 'success',
      balance: user.balance,
    });
  });
};

const getDebit = (req, res) => {
  const { start, end } = req.query;

  Transaction.find({
    date: {
      $gte: start,
      $lte: end,
    },
    amount: { $lte: 0 },
  }).exec((err, transactions) => {
    if (err) {
      return res.status(500).json({
        message: 'unable to find transactions',
        error: err,
      });
    }
    const totalDebit = transactions.reduce((prev, curr) => prev + curr.amount, 0);
    res.status(200).json({
      message: 'success',
      totalDebit:-totalDebit,
      transactions,
    });
  });
};

const getCredit = (req, res) => {
    const { start, end } = req.query;
  
    Transaction.find({
      date: {
        $gte: start,
        $lte: end,
      },
      amount: { $gte: 0 },
    }).exec((err, transactions) => {
      if (err) {
        return res.status(500).json({
          message: 'unable to find transactions',
          error: err,
        });
      }
      const totalCredit = transactions.reduce((prev, curr) => prev + curr.amount, 0);
      res.status(200).json({
        message: 'success',
        totalCredit,
        transactions,
      });
    });
};
  

const getSavings = (req, res) => {
    const { start, end } = req.query;
  
    Transaction.find({
      date: {
        $gte: start,
        $lte: end,
      },
    }).exec((err, transactions) => {
      if (err) {
        return res.status(500).json({
          message: 'unable to find transactions',
          error: err,
        });
      }
      const totalSavings = transactions.reduce((prev, curr) => prev + curr.amount, 0);
      res.status(200).json({
        message: 'success',
        totalSavings,
        transactions,
      });
    });
  };

module.exports = { addTransaction, getBalance, getDebit ,getCredit,getSavings};
