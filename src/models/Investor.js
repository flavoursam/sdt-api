import mongoose from 'mongoose';

var InvestorSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    contactNumber: String,
    email: String,
    role: String,
    urls: [String],
    location: String,
    investorType: String,
    areasOfResearch: [String],
    technologies: [String],
    currentInvestments: [String],
    prevInvestments: [String],
    numOfExits: Number,
    notes: String,
});

InvestorSchema.index({
    firstName:'text',
    lastName:'text',
    areasOfResearch:'text',
    technologies:'text'
});


var Investor = mongoose.model('Investor', InvestorSchema);

export default Investor;
