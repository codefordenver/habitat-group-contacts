import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/fetchUser";
import { bindActionCreators } from "redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserDetail from "../containers/UserDetail";

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUser(this.props.lookupUser.UserUid);
  }

  render() {
    const { user } = this.props;
    const { deleted } = this.props;
    return (
      <div>
        {user ? (
          <div>
            <UserDetail user={user} deleted={deleted} />
          </div>
        ) : (
          <LinearProgress />
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }, ownProps) {
  return { user: users[ownProps.lookupUser.UserUid] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
