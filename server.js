const express = require('express')
const app = express()
const port = process.env.port||3000

app.set('view engine','ejs')

app.get('/',(req,res,next)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`working on port ${port}`);
})