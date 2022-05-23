import mongoose from "mongoose";
const connectDB = (url) =>{
    return mongoose.connect("mongodb://localhost:27017/data_log",{ useNewUrlParser: true , useUnifiedTopology : true})
    .then(()=> console.log("successful"))
    .catch((err)=> console.log(err));

}
export default connectDB;