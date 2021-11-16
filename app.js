const express = require('express')
const app = express()
const port = 3000
const connectionDB = require('./db/connection')

require('dotenv').config()


const department = require('./routes/departments')

//middlewares
app.use(express.json())


//routes
app.use('/departments',department)

const start = async ()=>{
    try {
        await connectionDB(process.env.MONGO_URI)
        app.listen(port,()=>{console.log('listening on the server')})
    } catch (error) {
        console.log(error)
    }
}
start()