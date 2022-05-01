const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "125886744376-h8mn4njhosujs15h043jkdts96ugiklj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "332c012cf2aceb20061d";
const GITHUB_CLIENT_SECRET = "a7471aee1bb6977d654568df329e1dbb31cc89fc";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
