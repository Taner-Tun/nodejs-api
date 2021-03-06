// Defining the routes
module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
  
    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/message/:messageId", App.findOne);
  
    app.patch("/message/:messageId", App.update);
  
    app.delete("/message/:messageId", App.delete);

    app.delete("/delete-all", App.delete)

}