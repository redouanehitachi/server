
const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20');
const keys = require('../config/Keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
});


passport.use(new GoogleStartegy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id })

    if (existingUser) {
        return done(null, existingUser);
    }
    const user = await new User({ googleId: profile.id }).save()

    done(null, user)


})

);