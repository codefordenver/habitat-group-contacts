import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions/fetchEvents";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import EventList from "./EventList";
import ErrorIndicator from "../containers/ErrorIndicator";

import "react-datepicker/dist/react-datepicker.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleFetchEvent = this.handleFetchEvent.bind(this);
  }

  handleStartChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleFetchEvent() {
    //Add error handling of dates are null
    const momentStartDate = this.state.startDate
      ? moment(this.state.startDate.startOf("day")).format()
      : null;
    const momentEndDate = this.state.startDate
      ? moment(this.state.startDate.endOf("day")).format()
      : null;

    if (momentStartDate) {
      this.props.fetchEvents(momentStartDate, momentEndDate);
    }
  }

  render() {
    const style = {
      divStyle: {
        padding: "5px",
        margin: "10px 0 10px 0"
      }
    };

    const authCheck = (auth) => {
      if(!auth){
        return "Error Code 1: You must login to search events"
      }

      if(!auth.isAdmin){
        return "Error Code 2: You must have administrator access to search for events"
      }
      
      return null
    }

    const error = authCheck(this.props.auth);

    return (
      <div style={style.divStyle}>
        {! error ? (
          <Grid container alignItems="center">
            <Grid item xs={12} sm={3}>
              <Typography>Start Date (Required)</Typography>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
                popperPlacement="top"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={this.handleFetchEvent}
              >
                Find Events
              </Button>
            </Grid>
            <Grid item xs={12} sm={3} />
            <Grid item xs={12} sm={3} />
            <Grid item xs={12}>
              <EventList />
            </Grid>
          </Grid>
        ) : (
          <Typography color="error" align="center">
            {<ErrorIndicator>{error}</ErrorIndicator>}
          </Typography>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
