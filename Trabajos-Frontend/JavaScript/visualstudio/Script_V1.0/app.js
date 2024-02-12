import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
// import config from './config.js';
import routh from './routes/routh.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routh);

// mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

export default app;
