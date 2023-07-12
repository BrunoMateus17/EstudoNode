const mongoose = require('mongoose');
const connectToDatabase = async () =>{
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_ADMIN}:${process.env.MONGODB_PASSWORD}@estudonode.pghdbcy.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
        console.log("deu certo")
        },err=>{
          console.log(err)  
        })
}

module.exports = connectToDatabase;