//DEPENDENCIES
const express = require("express");

//Tells node we are creating an "express" server
const app = express();

//Sets initial port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT:  ${PORT}`);
});
