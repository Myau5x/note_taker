const path = require('path');

module.exports = function(app){
    app.get('/api/notes', function(req,res){
        console.log("reading notes");
    });
    app.post('/api/notes', function(req,res){
        console.log("posting new note");
    });
    app.delete('/api/notes/:id',function(req,res){
        console.log("deleting note");
    })
    
}