const express = require ('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
app.use(express.json());


app.use(cors());
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', true);
    
//     if(req.method==='OPTIONS'){
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept,Authorization');
//         res.setHeader('Access-Control-Allow-Credentials', true);
//     }
//     next();
// });

app.get("/", (req,resp)=>{
    resp.json({message:"This is message for testing"});
});

app.post('/put-on-mail', (req,resp)=>{
    let data = req.body;
    resp.send(data);
});

app.listen(process.env.PORT || 5000);