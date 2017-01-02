const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
     console.log('Unable to connect to MongoDB server');
     return;
  }

  console.log('Succesfully connected to the database');

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5869823ac943907b0f2f22fc')
  // }, {
  //   $set : {
  //     text : 'Learn MongoDB'
  //   }
  // }, {
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndUpdate({name : 'Harshil Shah'}, {$set : {name : 'Sagar Aryal'}}, {returnOriginal : false})
  .then((result) => {
    console.log(result);
    db.collection('Users').findOneAndUpdate({name : 'Sagar Aryal'}, {$inc : {age : 2}}, {returnOriginal : false})
    .then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });



  //db.close();
});
