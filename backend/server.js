const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const userRoutes = express.Router();
const PORT = 4000;
const URI = 'mongodb+srv://alaomichael:babatunde_2@measurement1-zsaz7.gcp.mongodb.net/test?retryWrites=true&w=majority'
let Todo = require('./models/todo.model');
let User = require('./models/user.model');

//const usersRouter = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());

// Offline Database
// mongoose.connect('mongodb://127.0.0.1:27017/fha', { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once('open', function() {
// console.log("MongoDB database connection established successfully");
// })

//Online database
mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', function() {
console.log("MongoDB database connection established successfully");
})

// User Route
userRoutes.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

userRoutes.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Customer Data Route
todoRoutes.route('/').get(function(req, res) {
Todo.find(function(err, todos) {
if (err) {
console.log(err);
} else {
res.json(todos);
}
});
});

todoRoutes.route('/:id').get(function(req, res) {
let id = req.params.id;
Todo.findById(id, function(err, todo) {
res.json(todo);
});
});

// Just editted in case of any error
todoRoutes.route('/show/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo,user) {
        res.json(todo,user);
    });
});

todoRoutes.route('/delete/:id').delete(function(req, res) {
let id = req.params.id;
Todo.findByIdAndDelete(id, function(err, todo) {
res.json(todo);
}).catch(err => {
    res.status(400).send("Customer Deleted");
});
});


todoRoutes.route('/update/:id').post(function(req, res) {
Todo.findById(req.params.id, function(err, todo) {
if (!todo)
res.status(404).send("data is not found");
else
todo.username = req.body.username;
todo.name = req.body.name;
todo.phone = req.body.phone;
todo.email = req.body.email;
todo.underbust = req.body.underbust;
todo.hip = req.body.hip;
todo.length = req.body.length;
todo.waist = req.body.waist;
todo.sleeve = req.body.sleeve;
todo.round_sleeve = req.body.round_sleeve;
todo.nip = req.body.nip;
todo.stk = req.body.stk;
todo.shoulder = req.body.shoulder;
todo.gown_length = req.body.gown_length;
todo.skirt_length = req.body.skirt_length;
todo.blouse_length = req.body.blouse_length;
todo.skirt_waist = req.body.skirt_waist;
todo.bust = req.body.bust;
todo.image = req.body.image;
todo.date = Date.parse(req.body.date);
todo.todo_description = req.body.todo_description;
todo.todo_responsible = req.body.todo_responsible;
todo.todo_priority = req.body.todo_priority;
todo.todo_completed = req.body.todo_completed;
todo.save().then(todo => {
res.json('Todo updated!');
})
.catch(err => {
res.status(400).send("Update not possible");
});
});
});

todoRoutes.route('/add').post(function(req, res) {
let todo = new Todo(req.body);
todo.save()
.then(todo => {
res.status(200).json({'todo': 'Todo added successfully'});
})
.catch(err => {
res.status(400).send('adding new todo failed');
});
});

app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

app.listen(PORT, function() {
console.log("Server is running on Port: " + PORT);
});
