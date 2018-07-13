import React, { Component } from "react";
import { connect } from "react-redux";
import Papa from "papaparse";
import Blob from "blob";
import _ from "lodash";
import Button from "@material-ui/core/Button";

class DownloadExcel extends Component {
  componentWillMount() {}

  render() {
    const paddingStyle = {
      padding: "0 0 10px 0"
    };

    const formatUsers = () => {
      /* TODO: Turn consts into an importable variable as it is used in UserDetail.js file */
      const FIRST_NAME_UID = "01a07da8-05cc-45af-8e59-f8742cb7fa8e";
      const LAST_NAME_UID = "01a07da8-05cc-45af-8e59-f8742cb7fa8e";
      const PHONE_UID = "39969c13-32f0-4398-946a-50faa497c520";
      const EMAIL_UID = "5573ba82-5374-4401-8d70-0c55492817e7";

      var userData = _.map(this.props.users, user => {
        const FirstName = user[FIRST_NAME_UID].FirstName;
        const LastName = user[LAST_NAME_UID].LastName;
        const Phone = user[PHONE_UID].Value;
        const Email = user[EMAIL_UID].Value;

        var userObject = {
          "First Name": FirstName,
          "Last Name": LastName,
          Phone: Phone,
          Email: Email
        };

        return Object.assign({}, userData, userObject);
      });

      return userData;
    };

    const makeBlob = csv => {
      /* Blob is used to download the CSV
      https://github.com/mholt/PapaParse/issues/175 */

      /* TODO:  Update filename based on event and usergroup information */

      var blob = new Blob([csv]);
      if (window.navigator.msSaveOrOpenBlob)
        // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
        window.navigator.msSaveBlob(blob, "filename.csv");
      else {
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob, { type: "text/plain" });
        a.download = "filename.csv";
        document.body.appendChild(a);
        a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
        document.body.removeChild(a);
      }
    };

    const downloadExcel = e => {
      e.preventDefault();
      var csv = Papa.unparse(formatUsers());
      makeBlob(csv);
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

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  null
)(DownloadExcel);
