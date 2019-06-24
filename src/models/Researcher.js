import mongoose from 'mongoose';


var ResearcherSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,    
    position: String,
    role: String,
    email: String,
    contactNumber: String,
    urls: [String],
    areasOfResearch: [String],
    technologies: [String],
});

ResearcherSchema.index({
    firstName:'text',
    lastName:'text',
    areasOfResearch:'text',
    technologies:'text'
});

var Researcher = mongoose.model('Researcher', ResearcherSchema);

export default Researcher;
