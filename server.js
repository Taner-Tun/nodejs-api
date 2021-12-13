
// setting up the server
const express = require('express');
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// connect to mongoose local host
/*mongoose.connect("mongodb://127.0.0.1:27017/todo-mongoDB", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});*/

// connect to mongodb atlas
const url = `mongodb+srv://Taner:noskire09876@slutprojekt.v73xt.mongodb.net/SLUTPROJEKT?retryWrites=true&w=majority`;
const connectionParams={
 useNewUrlParser: true,
 //useCreateIndex: true,
 useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
 .then( () => {
 console.log('Connected to database ')
 })
 .catch( (err) => {
 console.error(`Error connecting to the database. \n${err}`);
 });


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// test for server on browser local host
app.get('/', (req, res) => {
    res.json({ message: "Server is running"});
});

let PORT = 8080
require('./app/routes/app.routes.js')(app);//include the routes in server.js.
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
