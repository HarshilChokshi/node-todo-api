const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_j54g0mzd:j745cef5ggnnucsjc0krn1f2dc@ds157078.mlab.com:57078/heroku_j54g0mzd' || 'mongodb://localhost:27017/TodoApp');

module.exports.mongoose = mongoose;
