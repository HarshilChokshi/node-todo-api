const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
     console.log('Unable to connect to MongoDB server');
     return;
  }

  console.log('Succesfully connected to the database');

  db.collection('Todos').findOneAndDelete({completed : false}).then((response) => {
    console.log('Succesfully deleted items');
    console.log(response);
  }, (err) => {
    console.log('Could not delete items', err);
  });

  //db.close();
});
