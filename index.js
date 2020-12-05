const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const { PORT } = require('./config');
const {success,error} = require('consola');
const conntectToMongo = require('./db');

const app = express();
app.use(bodyParser.json());

app.use(cors());


conntectToMongo();

app.listen(PORT, () => {
    success({message:`server Started on port: ${PORT}`})
})

const router = require('./routers/controlroutes')
const user = require('./routers/users')

app.use("/data",router)
app.use('/user',user)