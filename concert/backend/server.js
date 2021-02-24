// REQUIRED PACKAGES, FILES AND CONST VARS
const PATH = require('path'); // NodeJS - Handle and transforms filepaths
const HTTP = require('http'); // NodeJS - Allow transfer of data over HTTP
const EXPRESS = require('express'); // use express framework
const APP = EXPRESS(); // create an express app
const SERVER = HTTP.createServer(APP); // create the server to use for socket.io
const PORT =  process.env.PORT ||3000; // Run server on available port, otherwise localhost fallback
const ENV = process.env.NODE_ENV; // Set available port

//use mongoose
const mongoose = require('mongoose');

const url = "mongodb+srv://root:CSUNconcert491@cluster0.bgl0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected!");
});

// Create the http server running on the available port
SERVER.listen(PORT);

// Access heroku production environment or localhost
if (ENV === 'production' || PORT === 3000) {
    // Set code folder
    APP.use(EXPRESS.static(PATH.join(__dirname, '../../public')));
    console.log(`Server running on port:  ${PORT}`);
} // end if

