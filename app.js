const express = require ('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
app.use(express.json());


app.use(cors());

app.set('trust proxy', true);

app.get("/user-ip", (req,resp)=>{
    // resp.json({message:"This is message for testing"});
    resp.send(req.ip);
});

app.post('/put-on-mail', (req,resp)=>{
    const ip = req.ip;
    const body = req.body;
});

app.listen(process.env.PORT || 5000);