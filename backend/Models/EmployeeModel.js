const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
name:{
    type: String,
    required: true 
},
email:{
    type: String,
    required: true ,
    unique: true
},
mobile:{
    type: String,
    required: true
    
},
desigination:{
    type: String,
    required: true 
},
gender:{
    type: String,
    required: true 
},
course:{
    type: String,
    required: true 
},
profileImage:{
    type: String
},
createdAt:{
    type: Date,
    default: new Date() 
}

});
const EmployeeModel = mongoose.model('employees', EmployeeSchema);
module.exports =EmployeeModel;