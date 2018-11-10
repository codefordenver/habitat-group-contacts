const passport = require("passport");

module.exports = {
  authenticate: (req, res) => {
  },

  signin: (req, res) => {
    const { email } = req.user;
    res.json({ email });
  },

  signout: (req, res) => {
    req.logout();
    res.json({ email: '' })
  },

  current: (req, res) => {
    const { email } = req.user;
    res.json({ email });
  }
}