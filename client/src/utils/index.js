import moment from "moment";

const dateFormat = (date, type) => {
  const d = new Date(date);

  switch (type) {
    case "start":
      return moment(d).format("MMMM Do YYYY, h:mm a");

    case "end":
      return moment(d).format("h:mm a");

    default:
      return null;
  }
};

export { dateFormat };
