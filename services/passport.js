
const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20');
const keys = require('../config/Keys')

passport.use(new GoogleStartegy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile token', profile);
    console.log('done token', done);
})
);