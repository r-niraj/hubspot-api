const express = require ('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
app.use(express.json());

var satelize = require('satelize');


app.use(cors());

app.set('trust proxy', true);

app.get("/", (req,resp)=>{
    resp.json({message:"This is message for testing"});
});

app.post('/put-on-mail', (req,resp)=>{
    const userIp = req.ip;
    let formData = req.body;



    satelize.satelize({ip:userIp}, function(err, payload) {
        let userData = [payload, formData];
    });


    resp.send(userData);
});

app.listen(process.env.PORT || 5000);