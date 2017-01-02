const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
     console.log('Unable to connect to MongoDB server');
     return;
  }

  console.log('Succesfully connected to the database');

  db.collection('Todos').insertOne({
    text : 'Something to do',
    completed : false
  }, (err, result) => {
    if(err)
    {
      console.log('Unable to add new Todo document');
      return;
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name : 'Harshil Shah',
    age : '18',
    location : 'London Canada'
  }, (err, result) => {
    if(err)
    {
      console.log('Unable to add new user document');
      return;
    }

    console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
  });

  db.close();
});
