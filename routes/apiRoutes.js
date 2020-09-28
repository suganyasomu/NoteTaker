var { v4: uuidv4 } = require('uuid');
var notesData=require("../db/db");
//=====================================================================
//Routing
//=====================================================================
module.exports = function (app) {

  //To get the data from JSON
  app.get("/api/notes", function (req, res) {
res.json(notesData);

  });

  //To post the data from JSON
  app.post("/api/notes", function (req, res) {
      req.body.id = uuidv4();
      notesData.push(req.body);
      res.send(notesData);
  });

  //To delete the data from JSON
  app.delete("/api/notes/:id",function(req,res){
    notesData = notesData.filter(note=> {
      if (note.id == req.params.id) {
        return false;
      }
      return true;
    });
    res.send(notesData);
  })
};
