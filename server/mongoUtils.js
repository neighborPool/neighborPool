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
//compare password methods to compare used password
UserSchema.methods.comparePasswords = function(userpassword){

    var defer = Q.defer();

    var savedPassword = this.password;

    bcrypt.compare(userpassword, savedpassword, function(err, match){
        if(err){
            defer.reject(err);
        } else {
            defer.resolve(match);
        }
    })
    return defer.promise;
};

UserSchema.pre('save', function(next){
    // get the current user or instance of the user schema
    var user = this;
    // only hash the password if it has been modified (or is new)
    if(!user.isModified('password')){
        return next();
    }
    //create the salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        //handle error
        if(err) {return next(err)};
        //hash the password and the sal
        bcrypt.hash(user.password, salt, null, function(err, hash){
            //handle error
            if(err) {return next(err)}
            //override the user password with the hash and add the salt to the salt property
            user.password = hash;
            user.salt = salt;
            next(); 
        });
    });
});

var User = mongoose.model('users', UserSchema);

module.exports = User;