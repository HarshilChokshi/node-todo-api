const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
     console.log('Unable to connect to MongoDB server');
     return;
  }

  console.log('Succesfully connected to the database');

  db.collection('Todos').findOneAndUpdate({text : 'Go to school tommorow'}, {$set : {text : 'Go to university tommorow'}}, {returnOriginal : false})
  .then((response) => {
    console.log('Succesfully updated note: ');
    console.log(JSON.stringify(response, undefined, 2));
  });

  //db.close();
});
