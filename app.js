const express = require ('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
app.use(express.json());

var satelize = require('satelize');


app.use(cors());

app.set('trust proxy', true);

let userIp;
let payloadData;

app.get("/", (req,resp)=>{
    resp.json({message:"This is message for testing"});
    userIp= req.ip;
});

app.post('/put-on-mail', (req,resp)=>{

    satelize.satelize({ip:userIp}, function(err, payload) {
        payloadData = payload;
    });
    
    let formData = req.body;
    allUserData = [userIp,payloadData,formData]
    resp.send(allUserData);
});

app.listen(process.env.PORT || 5000);