import React from "react";
import UserList from "./UserList";

const usersList = [
  {
    firstname: "Josh",
    lastname: "Bernstein",
    phone: "000-000-0000",
    email: "josh@email.com"
  },

  {
    firstname: "Alex",
    lastname: "S",
    phone: "100-000-0000",
    email: "alex@email.com"
  }
];

const FunctionName = props => {
  return (
    <React.Fragment>
      {props.event ? console.log("Event Card Props ", props.event) : "none"}
      <UserList users={usersList} />
    </React.Fragment>
  );
};

export default FunctionName;
