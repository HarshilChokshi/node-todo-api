const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    console.log('Could not connect to database');
    return;
  }

  db.collection('Todos').find({text : 'Go to school tommorow'}).toArray().then((todoDocuments) => {
    console.log(`${todoDocuments.length} document(s) found`);
    console.log(todoDocuments);
  }, (err) => {
    console.log('Could not fetch documents');
  });
});
