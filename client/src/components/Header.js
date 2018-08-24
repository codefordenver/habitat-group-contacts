import React from "react";

import { connect } from "react-redux";
import SimpleAppBar from "../containers/SimpleAppBar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <SimpleAppBar
          title="Habitat for Humanity - Denver"
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
