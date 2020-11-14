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
            let new_note = req.body;
            let last_id = 0;
            if (x.length>0){
                last_id = parseInt( x[x.length-1]['id']);}
            new_note.id = last_id+1; ////last guaranted max
            //res.json(x);
            x.push(new_note);
            console.log(x);
            fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(x), (err)=>{
                if (err) throw err;
                console.log("write new note");
            })
        }) 
        res.json({ ok: true });
    });
    app.delete('/api/notes/:id',function(req,res){
        console.log(`deleting note ${req.params.id}`);
        fs.readFile(path.join(__dirname, "../db/db.json"),'utf8',(err,data)=>{
            if (err) throw err;
            let x = JSON.parse(data);
            let y = x.filter((el)=>{return el.id!=req.params.id});
            console.log(y);
            fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(y), (err)=>{
                if (err) throw err;
                console.log("write without deleted");
            })
        })
        res.json({ok:true});
    })
    
}