const express = require('express');
const connect = require('./database/connect');
const cors = require('cors');
const movieRouter = require('./routes/movies.routes');
const userRouter = require('./routes/user.routes');

require('dotenv').config();
const env = process.env;


const app = express();

app.use(cors());
app.use(express.json());
app.use('/movies',movieRouter);
app.use('/users',userRouter);

app.use('/',(req,res)=>{
    req.send('Api Working');x
})


connect().then(res=>{
    app.listen(env.PORT, () => {
        console.log('Server Started');
    })
    
}).catch(err=>{
    console.log(err);
})

