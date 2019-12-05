const dbname = 'store'
module.exports = (app,couch)=>{
    app.route('/')
    .get((req,res,next)=>{
        res.render('index')
    })
    app.get('/1', (req,res,next)=>{
        try {
            let viewurl = "_design/Items/_view/Items"
            let data =  couch.get(dbname,viewurl)
            let rows  =  data.data.rows
            console.log(rows);
            
            res.send(rows)
        } catch (error) {
         throw error   
        } 
    })
}