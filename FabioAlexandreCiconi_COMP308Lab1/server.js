// The server.js file is the main file of your Node.js application 
// It will load the express.js file as a module to bootstrap your Express application
//
//The process.env.NODE_ENV variable is set to the default 'development‘
//value if it doesn 't exist.
// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the 'express' module
const configureExpress = require('./config/express');

// Create a new Express application instance
const app = configureExpress();

//to load the files that are in the public directory
//app.use(express.static('public'));
//specify views folder
//app.set('views', 'app/views');
//specify the view engine
//app.set('view engine', 'ejs')
// render the loginview when a request is made to path /login
//app.use('/login', function (req, res) {
//    // Use the 'response' object to render a view
//    res.render('loginview', { //pas values to ejs view
//        loginMessage: "Please login to use the app:",
//    });
//});
// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;