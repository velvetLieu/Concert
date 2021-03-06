// REQUIRED SERVER PACKAGES, FILES AND CONST VARS
const PATH = require('path'); // NodeJS - Handle and transforms filepaths
const HTTP = require('http'); // NodeJS - Allow transfer of data over HTTP
const EXPRESS = require('express'); // use express framework
const APP = EXPRESS(); // create an express app
const SERVER = HTTP.createServer(APP); // create the server to use for socket.io
const PORT =  process.env.PORT ||3000; // Run server on available port, otherwise localhost fallback
const ENV = process.env.NODE_ENV; // Set available port
const BODYPARSER = require('body-parser');
const cors = require('cors');

APP.use(cors());

// Database consts
//const mongoose = require('mongoose'); //use mongoose framework
//const url = "mongodb+srv://root:CSUNconcert491@cluster0.bgl0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" // Database Creds

// DATABASE
//mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}); // Connect to database

//const db = mongoose.connection; // Store connection result

//db.on('error', console.error.bind(console, 'connection error:')); // Catch connection error

// Otherwose, confirm connection
//db.once('open', function() {
  //console.log("We are connected!");
//});

// SERVER
// Create the http server running on the available port
SERVER.listen(PORT);

// Access heroku production environment or localhost
if (ENV === 'production' || PORT === 3000) {
    // Set production code folder (concert/build)
    APP.use(EXPRESS.static(PATH.join(__dirname, 'concert/build')));

    APP.use(BODYPARSER.json());
    APP.use(BODYPARSER.urlencoded({ extended: true }));

    //Send to index.html as default path, sends users to 404 is path is not found
    APP.get('*', (req, res) => {
      res.sendFile(PATH.resolve(__dirname, 'concert', 'build', 'index.html'));
    });

    console.log(`Server running on port: ${PORT}`);
} // end if


APP.post('/', (req, res) => {
    console.log(req.body)
    res.send("Success");
})
