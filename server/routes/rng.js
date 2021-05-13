import express from 'express';
import axios from 'axios';
const router = express.Router();

router.get('/', (req, res) => {
    axios.get('https://csrng.net/csrng/csrng.php?min=0&max=7')
    .then((response) => {
        console.log(response.data[0].random)
    })
})

export default router;

// console.log(res.data[0].random)