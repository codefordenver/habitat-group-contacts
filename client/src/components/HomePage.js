import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions/fetchEvents";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AppBar from "../containers/SimpleAppBar";
import EventList from "./EventList";

import "react-datepicker/dist/react-datepicker.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleFetchEvent = this.handleFetchEvent.bind(this);
  }

  handleStartChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }

  handleFetchEvent() {
    //Add error handling of dates are null
    const momentStartDate = this.state.startDate
      ? moment(this.state.startDate.startOf("day")).format()
      : null;
    const momentEndDate = this.state.endDate
      ? moment(this.state.endDate.endOf("day")).format()
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

    return (
      <div>
        <AppBar title="Habitat for Humanity - Denver" />
        <div style={style.divStyle}>
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
              <Typography>End Date (Can be left blank)</Typography>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleEndChange}
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
            <Grid item xs={12}>
              <EventList />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
