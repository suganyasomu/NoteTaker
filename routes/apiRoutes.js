var fs = require("fs");
var { v4: uuidv4 } = require('uuid');
//=====================================================================
//Routing
//=====================================================================
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (error, data) {
      if (error) {
        return console.log(error);
      }

      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (error, data) {
      if (error) {
        return console.log(error);
      }

      var notes = JSON.parse(data);

      req.body.id = uuidv4();
      notes.push(req.body);
      fs.writeFile("./db/db.json", JSON.stringify(notes), "utf8", function (
        error
      ) {
        if (error) {
          return console.log(error);
        }

        res.json("Successfully saved!");
      });
    });
  });

  app.delete("/api/notes/:id", function(req,res){
    var jsonId = req.params.id;


    console.log(jsonId);
    fs.readFile("./db/db.json", "utf8", function (error, data) {
      if (error) {
        return console.log(error);
      }
console.log(data);
      var notes = JSON.parse(data);
      // console.log(notes);

      // for(i=0;i<notes.length;i++){
      //   console.log(notes[i].id);
      //   console.log(jsonId);
      //   if(notes[i].id === jsonId )
      //   {
      //     notes.slice(i);
      //   }
      // }
      var listId = notes.filter((value) => value.id !== jsonId)
      console.log(listId);
      // listId.slice();
    
// filter method
      fs.writeFile("./db/db.json", JSON.stringify(listId), "utf8", function (
        error
      ) {
        if (error) {
          return console.log(error);
        }

        res.json("Successfully deleted!");
      });
    });
  })
};
