const  express  = require("express")
const connectDB = require("./src/db")
const router = require("./src/routes")
const  dotenv  = require("dotenv").config()
const  cors  = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use('/',router)


connectDB()

app.get('/',(req,res)=>{
    res.send("<h2>Shopping API</h2>")
})

const port = process.env.PORT

app.listen(port,()=>{
    console.log("server is connected in PORT "+port);
})