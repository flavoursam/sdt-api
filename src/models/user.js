import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	id: String,	
	firstName: String,
	lastName: String,
	email: String,
	pw: String,
	role: String,
	createdAt: Number
});

const User = mongoose.model('User', userSchema);

export default User;
