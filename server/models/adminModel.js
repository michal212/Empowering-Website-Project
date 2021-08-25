const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model('admin', adminSchema);
