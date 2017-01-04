const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;

const mongoose = require('./../database/mongoose.js').mongoose;
const Todo = require('./../database/models/todo.js').Todo;
const User = require('./../database/models/user.js').User;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var newTodo = new Todo({
    text : req.body.text
  });

  newTodo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((collection) => {
    res.send({
      todos : collection
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id))
  {
    res.status(404).send({
      errorMessage : 'The id you passed is not a valid id'
    });
  }
  else
  {
    Todo.findById(id).then((doc) => {
      if(!doc)
      {
        res.status(404).send({
          errorMessage : 'The id you passed in does not exist in the database'
        });

        return;
      }

      res.send(doc);
    }, (err) => {
      res.status(400).send(err);
    });
  }

});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
