module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You are not currently logged in." });
  }

  if(req.user.isAdmin){
    //console.log("User is an Admin");
    next();
  } 
  else {
    //console.log("User is NOT an Admin");
    return res.status(401).send({ error: "You do not have permission to view this page.  Contact your administrator for elevated access." });
  }
};
