const express = require('express');

const mongoose= require('mongoose');

const app = express()
const cors = require('cors')
const router = require('./Router/User')
const dotenv = require('dotenv');






dotenv.config();
app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
                         res.send('hello worldsss')
});
app.use('/api',router)

mongoose.connect(process.env.Mongo_url,{
 useNewUrlParser: true,

})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))
app.listen(process.env.PORT,()=>{console.log('listening on port')});



                      


