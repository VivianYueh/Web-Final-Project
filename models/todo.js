var mongoose = require('mongoose');
const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Score:{
        type:String,
        require:true
    },
    Object:{
        type:String,
        require:true
    },
    Level:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model("peopleScore",todoSchema);