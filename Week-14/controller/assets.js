const Assets = require("../models/assets");


const getAssets = (req, res) => {
    Assets.findOne({
        user:req.user._id
    }).exec(async (err, assets) => {
        if (err) {
            res.status(400).json({
                message: 'something went wrong',
                error:err
            })
        }
        else if (assets) {
            res.status(200).json({
                message: 'Assets successfully found',
                assets
            })
        }
        else {
            res.status(200).json({
                message: 'Assets not found'
            })
        }
    })
}

const updateAssets = (req, res) => {
    const userId = req.user._id;
    console.log(userId);
    
    Assets.findOne({
        user:userId
    }).exec(async (err, assets) => {
        if (err) {
            res.status(400).json({
                message: 'something went wrong',
                error:err
            })
        }
        if (assets) {
            const { mf, gold, silver, crypto } = req.body;
            
            mf?(assets.mf = mf):null
            gold?(assets.gold = gold):null
            silver?(assets.silver = silver):null
            crypto ? (assets.crypto = crypto) : null
            
            assets.save((err, assets) => {
                if (err) {
                    res.status(400).json({
                        message: 'something went wrong',
                        error:err
                    })
                } else {
                    res.status(200).json({
                        message: 'Assets updated!',
                        assets
                    })
                }
            })
        } else {
            const { mf, gold, silver, crypto } = req.body;
            const user = req.user._id;
            const newAssets = new Assets({
                mf, gold, silver, crypto,user
            });

            newAssets.save((err, assets) => {
                if (err) {
                    res.status(400).json({
                        message: 'something went wrong',
                        error:err
                    })
                } else {
                    res.status(200).json({
                        message: 'Assets added!',
                        assets
                    })
                }
            })
        }
    })
};

module.exports = { updateAssets,getAssets };