const _ = require("lodash");
const keys = require("../config/keys");

const processUser = data => {
  const {UserUid} = data;
  
  const user = _.mapKeys(
    data.FormAnswers,
    "FormQuestionUid"
  )

  const FIRST_NAME_UID = "01a07da8-05cc-45af-8e59-f8742cb7fa8e";
  const LAST_NAME_UID = "01a07da8-05cc-45af-8e59-f8742cb7fa8e";
  const PHONE_UID = "39969c13-32f0-4398-946a-50faa497c520";
  const EMAIL_UID = "5573ba82-5374-4401-8d70-0c55492817e7";

  const FirstName = user[FIRST_NAME_UID] ? user[FIRST_NAME_UID].FirstName : "n/a";
  const LastName = user[LAST_NAME_UID] ? user[LAST_NAME_UID].LastName : "n/a" ;
  const Phone = user[PHONE_UID] ? user[PHONE_UID].Value : "n/a";
  const Email = user[EMAIL_UID] ? user[EMAIL_UID].Value : "n/a";

  const userObject = {
    UserUid: UserUid,
    FirstName: FirstName,
    LastName: LastName,
    Phone: Phone,
    Email: Email
  };

  return userObject;
};

const requestOptions = {
  auth: {
    username: keys.volunteerHubUsername,
    password: keys.volunteerHubPassword
  }
};

module.exports = { processUser, requestOptions };
