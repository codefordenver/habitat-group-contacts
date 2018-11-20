import React from "react";

import { connect } from "react-redux";
import AdminNavigation from "../containers/AdminNavigation";

class Header extends React.Component {
  render() {
    return (
      <div>
        <AdminNavigation
          auth={this.props.auth}
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
