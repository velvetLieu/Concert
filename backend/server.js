// REQUIRED SERVER PACKAGES, FILES AND CONST VARS
const PATH = require("path"); // NodeJS - Handle and transforms filepaths
const HTTP = require("http"); // NodeJS - Allow transfer of data over HTTP
const EXPRESS = require("express"); // use express framework
const APP = EXPRESS(); // create an express app
const SERVER = HTTP.createServer(APP); // create the server to use for socket.io
const PORT = process.env.PORT || 3000; // Run server on available port, otherwise localhost fallback
const ENV = process.env.NODE_ENV; // Set available port

//Equivalent to Body-Parser
APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: true }));

// APP.use(cors());
// Database consts
const mongoose = require('mongoose'); //use mongoose framework
//connection to our database variable holder
const url = "mongodb+srv://root:CSUNconcert491@cluster0.bgl0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" // Database Creds

// DATABASE
//connection being made 
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}); 

//holds the connection 
const db = mongoose.connection;
//result being tested
db.on('error', console.error.bind(console, 'connection error:')); // Catch connection error

// Otherwose, confirm connection
//db.once('open', function() {
//console.log("We are connected!");
//});

// SERVER
// Create the http server running on the available port
SERVER.listen(PORT);

// Access heroku production environment or localhost
if (ENV === "production" || PORT === 3000) {
  // Set production code folder (concert/build)
  APP.use(EXPRESS.static(PATH.join(__dirname, "concert/build")));

  //Send to index.html as default path
  // TEST: Try to remove to see if needed, used by server if not using api paths
  APP.get("*", (req, res) => {
    res.sendFile(PATH.resolve(__dirname, "concert", "build", "index.html"));
  });

  console.log(`Server running on port: ${PORT}`);
} // end if

//express routing
APP.post("/SignUp", (req, res) => res.send(console.log(req.body.email)));
