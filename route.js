const dbname = 'store'
module.exports = (app,couch)=>{
    app.route('/')
    .get((req,res,next)=>{
        res.render('index')
    })
    app.get('/1',async (req,res,next)=>{
        try {
            console.log('......');
            let viewurl = "_design/Items/_view/Items"
            let data = await couch.get(dbname,viewurl)
            let rows  = await data.data.rows
            res.send(rows)
        } catch (error) {
         throw error   
        } 
    })
}