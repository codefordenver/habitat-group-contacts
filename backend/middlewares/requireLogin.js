module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  if(req.user.isAdmin){
    //console.log("User is an Admin");
    next();
  } 
  else {
    //console.log("User is NOT an Admin");
    return res.status(401).send({ error: "User is not a site admin" });
  }
};
