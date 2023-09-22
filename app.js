const express = require ('express');
const app = express();

app.use(express.json());


app.get("/", (req,resp)=>{
    resp.json({message:"This is message for testing"});
});

app.post('/put-on-mail', (req,resp)=>{
    let data = req.body;
    console.log(data);

    resp.send("Success");
});

app.listen(5320);