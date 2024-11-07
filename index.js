const express = require('express');
const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20');
const keys = require('./config/Keys')
const app = express();

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

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);
app.get('/auth/google/callback', passport.authenticate('google'))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('connect to server')
});


