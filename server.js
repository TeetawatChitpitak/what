const express = require('express')
const app = express()
const port = process.env.port||3000
const NodeCouchDb  = require('node-couchdb')
const couch = new NodeCouchDb()
const route = require('./route')(app,couch)

app.set('view engine','ejs')
app.use('/css',express.static('./asset/css/'))



app.listen(port,()=>{
    console.log(`working on port ${port}`);
})