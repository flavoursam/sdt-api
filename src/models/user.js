import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
	id: String,
	firstName: String,
	lastName: String,
	email: String,
	pw: String,
	role: String,
	createdAt: Date,
});

var User = mongoose.model('User', userSchema);

export default User;
