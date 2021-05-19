import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()
const router = express.Router();

    router.get(`/:id`, (req, res) => {
        axios.post(`https://api.random.org/json-rpc/2/invoke`, {
            
                "jsonrpc": "2.0",
                "method": "generateIntegers",
                "params": {
                    "apiKey": process.env.apiKey,
                    "n": 4,
                    "min": 0,
                    "max": req.params.id,
                    "replacement": true,
                    "base": 10
                },
                "id": 20136
                       
        })
        .then(resp => res.send(resp.data.result.random.data))
        .catch(error => res.send(error))
    })

export default router;


