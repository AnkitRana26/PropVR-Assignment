const mongoose = require('mongoose');


const userShema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    ratedMovies:{type:[Object]}
})



const userModel = mongoose.model('user',userShema);
module.exports = userModel;


