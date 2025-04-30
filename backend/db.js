const mongoose=require('mongoose');

const run= async ()=>{
     await mongoose.connect('mongodb://mongo:27017/plagshield')
     console.log("connected")
}
module.exports=run;
