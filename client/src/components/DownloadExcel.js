import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import Papa from "papaparse";
import Blob from "blob";
import moment from "moment";
import sanitizeFilename from "sanitize-filename";
import Button from "@material-ui/core/Button";

class DownloadExcel extends Component {
  render() {
    const paddingStyle = {
      padding: "0 0 10px 0"
    };

    const today = new Date();

    const dateFormat = date => {
      const d = new Date(date);
      return moment(d).format("YYYYMMD");
    };

    const fileName = sanitizeFilename(
      // this.props.userGroupName +
        "EventDate-" +
        dateFormat(this.props.startTime) +
        "_Exported-" +
        dateFormat(today) +
        ".csv"
    );

    const formatUsers = users => {
      var userData = {};
      return (userData = _.map(users, user => {
        const userObject = {
          Name: user.FirstName + " " + user.LastName,
          Phone: user.Phone,
          Email: user.Email
        };
        return Object.assign({}, userData, userObject);
      }));
    };

    const makeBlob = (csv, fileName) => {
      /* Blob is used to download the CSV
      https://github.com/mholt/PapaParse/issues/175 */
      var blob = new Blob([csv]);
      if (window.navigator.msSaveOrOpenBlob)
        // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
        window.navigator.msSaveBlob(blob, fileName);
      else {
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob, { type: "text/plain" });
        a.download = fileName;
        document.body.appendChild(a);
        a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
        document.body.removeChild(a);
      }
    };

    const downloadExcel = e => {
      e.preventDefault();
      const csv = Papa.unparse(formatUsers(this.props.users));
      makeBlob(csv, fileName);
    };

    return (
      <div style={paddingStyle}>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={downloadExcel}
        >
          Download Excel
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  null
)(DownloadExcel);
