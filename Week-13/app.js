import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';


const app = express();


app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/',routes)




export default app;