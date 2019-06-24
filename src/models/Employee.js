import mongoose from 'mongoose';


var EmployeeSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    contactNumber: String,
    email: String,
    role: String,
    urls: [String],
    location: String,
    currentPosition: String,
    employer: String,
    previousEmployers: [String],
    areasOfResearch: [String],
    technologies: [String],
    notes: String,
    createdByAdmin: Boolean,
});


EmployeeSchema.index({
    firstName:'text',
    lastName:'text',
    areasOfResearch:'text',
    technologies:'text'
});

var Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
