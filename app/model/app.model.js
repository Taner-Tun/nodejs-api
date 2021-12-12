
// Define  model in Mongoose
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const AppSchema = mongoose.Schema({
  message:{
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('App', AppSchema);
