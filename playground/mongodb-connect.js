const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    console.log(`Could not connect to database. Error is: ${err}`);
    return;
  }

  db.collection('Todos').insertOne({
    text : 'Do something',
    completed : false
  }, (err, response) => {
    if(err)
    {
      console.log(`Could not add new Todo item to database. Error is: ${err}`);
      return;
    }
    console.log(`New item added:`);
    console.log(JSON.stringify(response.ops, undefined, 2));
  });

  db.close();
  console.log('This line is written after db.close()');
});
