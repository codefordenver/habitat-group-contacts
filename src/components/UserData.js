import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/fetchUser";
import { bindActionCreators } from "redux";

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUser(this.props.userID);
  }

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <div>Firstname: {this.props.user[4].FirstName}</div>
            <div>Lastname: {this.props.user[4].LastName}</div>
            <div>Phone: {this.props.user[5].Value}</div>
            <div>Email: {this.props.user[6].Value}</div>
          </div>
        ) : (
          "Waiting for User"
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }, ownProps) {
  return { user: users[ownProps.userID] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
