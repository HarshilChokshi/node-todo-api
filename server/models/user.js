const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email : {
    type : String,
    trim : true,
    minLength : 1,
    require : true
  }
});

module.exports.User = User;
