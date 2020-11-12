const path = require('path');
const fs = require('fs');

module.exports = function(app){
    app.get('/api/notes', function(req,res){
        ;
        console.log("reading notes");
        fs.readFile(path.join(__dirname, "../db/db.json"),'utf8',(err,data)=>{
            if (err) throw err;
            console.log(data);
            let x = JSON.parse(data);
            res.json(x);
        })
        //res.json(notes);
    });
    app.post('/api/notes', function(req,res){
        console.log("posting new note");
        console.log(req.body);
        fs.readFile(path.join(__dirname, "../db/db.json"),'utf8',(err,data)=>{
            if (err) throw err;
            console.log(data);
            let x = JSON.parse(data);
            //res.json(x);
            x.push(req.body);
            console.log(x);
            fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(x), (err)=>{
                if (err) throw err;
                console.log("write something");
            })
        })

    });
    app.delete('/api/notes/:id',function(req,res){
        console.log(`deleting note ${req.params.character}`);
    })
    
}