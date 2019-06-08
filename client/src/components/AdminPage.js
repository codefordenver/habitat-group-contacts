import React from "react";
import { connect } from "react-redux";
import AdminNavigation from "../containers/AdminNavigation";
import { fetchingUserSelector, userSelector } from "../reducers/reducerAuth";
import LoadingIndicator from "../containers/LoadingIndicator";

class Header extends React.Component {
  render() {
    const { auth, fetchingUser } = this.props;
    return (
      <div>
        {fetchingUser && <LoadingIndicator color="primary" />}
        {!fetchingUser && <AdminNavigation auth={auth} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: userSelector(state.auth),
    fetchingUser: fetchingUserSelector(state.auth)
  };
}

export default connect(mapStateToProps)(Header);
