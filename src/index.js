const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res)=>{
    res.send("Hello world!");
})
app.post('/add',(req,res)=>{
    const {num1,num2}=req.body;
    if(typeof num1==='string' || typeof num2==='string'){
        return res.status(400).json({
            status:"error",
            message:"invalid data types"
        })
    }
    if(typeof num1==='number' && typeof num2==='number'){
        if(num1>Number.MAX_VALUE || num2>Number.MAX_VALUE ){
            return res.status(400).json({
                status:`error`,
                message:`Overflow`
            })
        }else{
            return res.json({
                status:`success`,
                message:`the sum of given two number is`,
                sum:`${num1}+${num2}`
            })
        }
    }
});
app.post('/sub',(req,res)=>{
    const {num1,num2}=req.body;
    if(typeof num1==='string' || typeof num2==='string'){
        return res.status(400).json({
            status:"error",
            message:"invalid data types"
        })
    }
    if(typeof num1==='number' && typeof num2==='number'){
        if(num1<Number.MIN_VALUE || num2<MIN_VALUE ){
            return res.status(400).json({
                status:`error`,
                message:`Underflow`
            })
        }else{
            return res.json({
                status:`success`,
                message:`the difference of given two number`,
                sum:`${num1}-${num2}`
            })
        }
    }
});
app.post('/multiply',(req,res)=>{
    const {num1,num2}=req.body;
    if(typeof num1==='string' || typeof num2==='string'){
        return res.status(400).json({
            status:"error",
            message:"invalid data types"
        })
    }
    if(typeof num1==='number' && typeof num2==='number'){
        if(num1>Number.MAX_VALUE || num2>Number.MAX_VALUE ){
            return res.status(400).json({
                status:`error`,
                message:`Overflow`
            })
        }else{
            return res.json({
                status:`success`,
                message:`The product of given numbers`,
                sum:`${num1}*${num2}`
            })
        }
    }
});
app.post('/division',(req,res)=>{
    const {num1,num2}=req.body;
    if(typeof num1==='string' || typeof num2==='string'){
        return res.status(400).json({
            status:"error",
            message:"invalid data types"
        })
    }
    if(typeof num1==='number' && typeof num2==='number'){
        if( num2==0 ){
            return res.status(400).json({
                status:`error`,
                message:`Cannot divide by zero`
            })
        }else{
            return res.json({
                status:`success`,
                message:`the sum of given two number is`,
                sum:`${num1}/${num2}`
            })
        }
    }
});



// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;