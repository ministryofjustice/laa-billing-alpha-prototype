const sampleCaseListData = require('./crime-claim-sample-data.json');

module.exports = {

  // Insert values here
  sampleCaseListData,
  statuses: [
    { value: "select", text: "Please select" },
    { value: "granted", text: "Granted" },
    { value: "inprogress", text: "In progress" },
    { value: "notassigned", text: "Not assigned" },
    { value: "partgranted", text: "Part granted" },
    { value: "rejected", text: "Rejected" }
  ],
  caseworkers: [
    { value: "select", text: "Please select" },
    { value: "Fred Bloggs", text: "Fred Bloggs" },
    { value: "Gerry Dixon", text: "Gerry Dixon" },
    { value: "Maxine Smith", text: "Maxine Smith" },
    { value: "Tom Sawyer", text: "Tom Sawyer" }
  ],

  // Default user
  "loggedInUser": "Crime caseworker"
}
