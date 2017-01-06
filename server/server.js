const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const _ = require('lodash');

const mongoose = require('./../database/mongoose.js').mongoose;
const Todo = require('./../database/models/todo.js').Todo;
const User = require('./../database/models/user.js').User;

var app = express();

const port = process.env.PORT || 3000;

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
      errorMessage : 'The entered id is not valid'
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

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id))
  {
    res.status(404).send({
      errorMessage : 'The entered id is not valid'
    });
  }
  else
  {
    Todo.findByIdAndRemove(id).then((doc) => {
      if(!doc)
      {
        res.status(404).send({
          errorMessage : 'The id you entered does not exist in the database'
        });

        return;
      }

      res.send(doc);

    }, (err) => {
      res.status(400).send({
        errorMessage : `An error occured while trying to delete a todo item: ${err}`
      });
    });
  }
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id))
  {
    res.status(404).send({
      errorMessage : 'The entered id is not valid'
    });
  }
  else
  {
    if(_.isBoolean(body.completed) && body.completed)
    {
      body.completedAt = new Date().getTime();
    }
    else
    {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set : body}, {new : true}).then((doc) => {
      if(!doc)
      {
        res.status(404).send({
          errorMessage : 'The entered id does not exist in the database'
        });

        return;
      }

      res.send({
        todo : doc
      });
    }, (err) => {
      res.status(400).send({
        errorMessage: `Error occured while trying to uodate resource: ${err}`
      });
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
