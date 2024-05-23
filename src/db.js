const  mongoose  = require("mongoose")

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("DB Connected SuccessFully");
    } catch (error) {
        console.log("DB Connection Failure",error);
    }
}

module.exports = connectDB