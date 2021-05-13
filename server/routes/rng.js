import express from 'express';
import axios from 'axios';
const router = express.Router();

// router.get('/', (req, res) => {
//     axios.get('https://csrng.net/csrng/csrng.php?min=0&max=7')
//     .then((response) => {
//         console.log(response.data[0].random)
//     })
// })

router.get('/', (req, res) => {
    axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=5&base=10&format=html&rnd=new')
    .then((response) => {
        console.log(response)
    })
})

export default router;

// console.log(res.data[0].random)