
// Define  model in Mongoose
const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  message:{
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model('App', AppSchema);
