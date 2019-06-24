import mongoose from 'mongoose';

var StudentSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    contactNumber: String,
    role: String,
    email: String,
    urls: [String],
    institution: String,
    major: String,
    areasOfResearch: [String],
    technologies: [String],
    notes: String,
});

StudentSchema.index({
    firstName:'text',
    lastName:'text',
    areasOfResearch:'text',
    technologies:'text'
});


var Student = mongoose.model('Student', StudentSchema);

export default Student;
