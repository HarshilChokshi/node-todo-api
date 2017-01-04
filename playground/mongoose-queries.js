const mongoose = require('./../database/mongoose.js').mongoose;
const Todo = require('./../database/models/todo.js').Todo;
const User = require('./../database/models/user.js').User;
const ObjectID = require('mongodb').ObjectID;

var id = '586c5dbbb528b6c54578f6dd';

if(!ObjectID.isValid(id))
{
  console.log('The specified object id is not valid');
}
else
{
  User.findById(id).then((user) => {
    if(!user)
    {
      console.log('The spcified id does not exist in the database');
      return;
    }

    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log(err);
  });
}

//var id = '686c6726d92137c584179d47';

// Todo.find({
//   _id : id
// }).then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// }, (err) => {
//   console.log('Error');
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// }, (err) => {
//   console.log('Error');
// });

// Todo.findById(id).then((todo) => {
//   if(!todo)
//   {
//     console.log('Id not found in database');
//     return;
//   }
//   console.log(JSON.stringify(todo, undefined, 2));
// }, (err) => {
//   console.log(err);
// });
