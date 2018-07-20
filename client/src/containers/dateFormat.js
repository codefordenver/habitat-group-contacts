import moment from "moment";

const dateFormat = (date, type) => {
  var d = new Date(date);

  switch (type) {
    case "start":
      return moment(d).format("MMMM Do YYYY, h:mm:ss a");

    case "end":
      return moment(d).format("h:mm:ss a");

    default:
      return null;
  }
};

export default dateFormat;
