require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect('mongodb://localhost:27017/Authentication_System',
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb =>> Nodejs Authentication"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
