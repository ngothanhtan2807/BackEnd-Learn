const express = require('express');
const app = express();
const port = 3030;

//no middleware
app.use((req, res, next)=>{
    let body = "";
    req.on("data", (chunk)=>{
        body += chunk;
    });
    req.on("end", ()=>{
        req.body = JSON.parse(body);
        next();
    })
})

function validate(req, res, next){
    const { username, password} = req.body;
    if (username === undefined){
        next('username is required');
    }
    if(username.length >= 20){
        next('username phai it hon 20 ki tu');
    }
    if(password.length >=8){
        next('password phai it hon 8 ki tu');
    }
    next();
}

app.post('/user', validate, function(req, res){
    res.json(req.body);
});
app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server listening on port ", port)
})