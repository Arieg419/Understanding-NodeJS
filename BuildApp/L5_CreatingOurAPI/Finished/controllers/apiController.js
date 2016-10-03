var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    // will parse json out of http body if exists
    app.use(bodyParser.json());
    // will ensure that we can deal with data that is encoded. ie, numbers converted to percent signs etc..
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function(req, res) {

        // find doc that has prop user name with valu req.params.uname
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err) throw err;

            res.send(todos);
        });

    });

    app.get('/api/todo/:id', function(req, res) {

       Todos.findById({ _id: req.params.id }, function(err, todo) {
           if (err) throw err;

           res.send(todo);
       });

    });

    app.post('/api/todo', function(req, res) {

        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
                if (err) throw err;

                res.send('Success');
            });
        }

        else {

           var newTodo = Todos({
               username: 'test',
               todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });

        }

    });

    app.delete('/api/todo', function(req, res) {

        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })

    });

}
