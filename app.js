const express = require ('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(express.json());

app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
    res.header('Access-Control-Allow-Credentials', true);

    if(req.method==='OPTIONS'){
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
            res.header('Access-Control-Allow-Credentials', true);
            return res.status(200).json({});
    }
    next();
});

app.get("/", (req,resp)=>{
    resp.json({message:"This is message for testing"});
});

app.post('/put-on-mail', (req,resp)=>{
    let data = req.body;
    resp.send(data);
});

app.listen(process.env.PORT || 5000);