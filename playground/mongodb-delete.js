const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
     console.log('Unable to connect to MongoDB server');
     return;
  }

  console.log('Succesfully connected to the database');

  // db.collection('Todos').deleteMany({text : 'Get an 80 average next semester'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Todos').deleteOne({text : 'Eat dinner'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  //db.close();
});
