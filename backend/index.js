const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const app = express();
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

app.use(
  cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("server is running..");
});
