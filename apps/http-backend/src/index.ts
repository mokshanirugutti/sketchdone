import express from 'express'
import authRoutes from './routes/auth'

const app = express()



app.use('/auth',authRoutes)

app.listen(3001,()=>{
    console.log('server running on 3000')
})