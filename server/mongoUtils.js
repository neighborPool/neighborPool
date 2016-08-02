var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    Q        = require('q'),
    SALT_WORK_FACTOR = 10;

// export the database.
var UserSchema = new mongoose.Schema({
		username: {
			type: String,
			require: true,
			uniq: true
		},
		password: {
			type: String,
			require: true
		},
		salt: String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;