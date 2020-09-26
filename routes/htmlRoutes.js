// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");


//===============================================================================
// Routing
// ==============================================================================


      // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
module.exports=function(app){
  app.get("/notes",function(req,res){
      res.sendFile(path.join(__dirname,"../public/notes.html"));
  });

  //If no mattching route is found default to home
  app.get("*",function(req,res){
      res.sendFile(path.join(__dirname,"../public/index.html"));
  })
}
