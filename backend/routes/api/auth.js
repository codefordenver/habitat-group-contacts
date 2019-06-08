const passport = require("passport");
const router = require("express").Router();

router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router
  .route("/google/callback")
  .get(passport.authenticate("google"), (req, res) => {
    res.redirect("/#/admin-login");
  });

router.route("/logout").get((req, res) => {
  req.logout();
  res.redirect("/#/");
});

router.route("/current_user").get((req, res) => {
  res.send(req.user);
});

module.exports = router;
