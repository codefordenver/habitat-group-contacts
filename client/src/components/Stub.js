import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStub } from "../actions/fetchEvents";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const style = {
  divStyle: {
    padding: "5px",
    margin: "10px 0 10px 0"
  },
  buttonStyle: {
    marginLeft: "15px"
  }
};

class Stub extends Component {
  componentWillMount() {
    const {EventUid} = this.props;
    const {UserGroupUid} = this.props;
    this.props.fetchStub(EventUid, UserGroupUid);
  }

  render() {
    const { stub } = this.props;

    return (
      <div>
        {stub ? (
          <Typography>
            <Button
              variant="contained"
              size="small"
              color="primary"
              component={Link}
              style={style.buttonStyle}
              to={"event/" + stub.url_stub}
            >
              View Event Details
            </Button>
          </Typography>
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }
}

function mapStateToProps({ stub }, ownProps) {
  return { stub: stub[ownProps.EventUid + "/" + ownProps.UserGroupUid] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStub }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stub);
