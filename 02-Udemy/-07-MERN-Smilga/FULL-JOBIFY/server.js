import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

//db and authentication
import connectDB from './db/connect.js'

//routers


import authRouter from  './routes/authRoutes.js' 
import jobsRouter from "./routes/jobsRoutes.js";


//middleware
import notFoundMiddelware from './not-found.js'
import errorHandlerMiddelware from './error-handler.js'

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)

app.use(notFoundMiddelware)
app.use(errorHandlerMiddelware)

const port = process.env.PORT ||5000


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
          console.log(`server is live on ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()