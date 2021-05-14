import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

// router.get('/', (req, res) => {
    //     axios.get('https://csrng.net/csrng/csrng.php?min=0&max=7')
    //     .then((response) => {
        //         console.log(response.data[0].random)
        //     })
        // })
        // var RandomOrg = require('random-org');
        
        // var random = new RandomOrg({ apiKey: process.env.apiKey });
        // random.generateIntegers({ min: 1, max: 99, n: 2 })
        //   .then(function(result) {
        //     console.log(result.random.data); // [55, 3]
        //   });
        
    router.get('/', (req, res) => {
        axios.post('https://api.random.org/json-rpc/2/invoke', {
            
                "jsonrpc": "2.0",
                "method": "generateIntegers",
                "params": {
                    "apiKey": process.env.apiKey,
                    "n": 4,
                    "min": 0,
                    "max": 7,
                    "replacement": true,
                    "base": 10
                },
                "id": 20136
                       
        })
        .then(resp => res.send(resp.data.result.random.data))
        .catch(error => res.send(error))
    })




export default router;

