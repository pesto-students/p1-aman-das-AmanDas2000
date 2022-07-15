const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan=require('morgan')

const user = require('./routes/auth')
const assets = require('./routes/assets')
// const comment=require('./routes/comment')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;



app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected");
})


app.use('/api/user', user)
app.use('/api/assets', assets)
// app.use('/api/comment',comment)

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
})