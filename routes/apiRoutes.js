const path = require('path');
const fs = require('fs');

module.exports = function(app){
    app.get('/api/notes', function(req,res){
        ;
        console.log("reading notes");
        fs.readFile(path.join(__dirname, "../db/db.json"),'utf8',(err,data)=>{
            if (err) throw err;
            console.log(data);
            x = JSON.parse(data);
            res.json(x);
        })
        //res.json(notes);
    });
    app.post('/api/notes', function(req,res){
        console.log("posting new note");
    });
    app.delete('/api/notes/:id',function(req,res){
        console.log("deleting note");
    })
    
}