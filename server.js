const express = require('express')
const app = express()
const port = process.env.port||3000
const NodeCouchDb  = require('node-couchdb')
const couch = new NodeCouchDb()
const route = require('./route')(app,couch)

app.set('view engine','ejs')
app.use('/css',express.static('./asset/css/'))
app.use('/scripts',express.static('./asset/scripts'))
app.use('/img',express.static('./asset/img'))

app.listen(port,()=>{
    console.log(`working on port ${port}`);
})