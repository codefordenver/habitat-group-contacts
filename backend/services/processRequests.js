const _ = require("lodash");

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

  const FirstName = user[FIRST_NAME_UID].FirstName;
  const LastName = user[LAST_NAME_UID].LastName;
  const Phone = user[PHONE_UID].Value;
  const Email = user[EMAIL_UID].Value;

  const userObject = {
    UserUid: UserUid,
    FirstName: FirstName,
    LastName: LastName,
    Phone: Phone,
    Email: Email
  };

  return userObject;
};

module.exports = { processUser };
