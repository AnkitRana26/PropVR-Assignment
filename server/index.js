const express = require('express');
const connect = require('./database/connect');
const cors = require('cors');
const movieRouter = require('./routes/movies.routes');
const userRouter = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/movies',movieRouter);
app.use('/users',userRouter);

connect().then(res=>{
    app.listen(8080, () => {
        console.log('Server Started');
    })
    
}).catch(err=>{
    console.log(err);
})

