const express = require('express');
const EmployeeRouter = require('./Routes/EmployeeRoutes')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db');
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Employee Mgm server is running');
});

app.use('/api/employees',EmployeeRouter);
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})