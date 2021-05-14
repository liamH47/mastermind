import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

import rngRoutes from './routes/rng.js'

const app = express();
app.use(cors());
app.use('/rng', rngRoutes);

const port = 3001

// const testCall = async () => {
//     try {
//         return await axios.get('https://csrng.net/csrng/csrng.php?min=1&max=100');
//     } catch (error) {
//         console.log(error);
//     }
// }

// testCall();

app.get('/', (req, res) => {
  res.send('Hello Mastermind!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
