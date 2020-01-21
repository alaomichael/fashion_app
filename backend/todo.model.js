const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Todo = new Schema({

    name: {
type: String
},
    phone: {
type: Number
},
    underbust: {
type: Number
},
    hip: {
type: Number
},
    length: {
type: Number
},
    waist: {
type: Number
},
    sleeve: {
type: Number
},
    round_sleeve: {
type: Number
},
    nip: {
type: Number
},
    stk: {
type: Number
},
    shoulder: {
type: Number
},
    gown_length: {
type: Number
},
    skirt_length: {
type: Number
},
    blouse_length: {
type: Number
},
    skirt_waist: {
type: Number
},
    email: {
type: String
},
    bust: {
type: Number
}, 
todo_description: {
type: String
},
todo_responsible: {
type: String
},
todo_priority: {
type: String
},
todo_completed: {
type: Boolean
},
date: {
type: String
    }
});

module.exports = mongoose.model('Todo', Todo);