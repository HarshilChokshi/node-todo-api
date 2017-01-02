const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
     console.log('Unable to connect to MongoDB server');
     return;
  }

  console.log('Succesfully connected to the database');

  // db.collection('Todos').find({_id : new ObjectID('5869763768daf6b7065722ef')}).toArray().then((documents) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todo documents', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to get the Todos count', err);
  // });

  db.collection('Users').find().toArray().then((documents) => {
    console.log('User documents');
    console.log(JSON.stringify(documents, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users Doucuments', err);
  });

  //db.close();
});
