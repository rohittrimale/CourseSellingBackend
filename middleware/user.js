const { User } = require("../db/index");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.headers.username;
  const password = req.headers.password;
  console.log(username);

  User.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User doesn't exist",
        username: username,
        password: password,
      });
    }
  });
}

module.exports = userMiddleware;
