const express = require('express');
const app = express();
const port = 3001;
//use body

app.use(express.json());


app.use(express.urlencoded({extended: true}));

const bookRoute = require("./routes/book")
app.use("/v1", bookRoute);

const customerRoute = require("./routes/customer")
app.use('/v1', customerRoute);

// app.get("/",(req, res)=>{res.send(`hello world ${port}`)});
// app.get("/message/:msg", (req, res)=>{
//     let msg = req.params.msg;
//     console.log("message: ", msg);
//     res.send("message is sent ...")
// })


app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})

// const userRoute = require("./routes/user");
// app.use('/v1', userRoute);