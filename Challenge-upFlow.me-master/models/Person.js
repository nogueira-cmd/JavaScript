const mongoose = require('mongoose')

const Person = mongoose.model('Person',{
    name: String,
    age: Number,
    salary: Number,
    formation: String

})

// exportando

module.exports = Person