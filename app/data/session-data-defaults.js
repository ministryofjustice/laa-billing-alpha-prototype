const sampleDataCrime = require('./crime-claim-sample-data.json');
const sampleDataCivil = require('./civil-claim-sample-data.json');
const sampleClaimsCrimeConcept = require('./sample-claims-crime-v1.json');
const sampleClaimsCivil = require('./sample-claims-civil.json');
const sampleClaimsCrime = require('./sample-claims-crime.json');

module.exports = {

  // Insert values here
  sampleDataCrime,
  sampleDataCivil,
  sampleClaimsCrimeConcept,
  sampleClaimsCivil,
  sampleClaimsCrime,
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
  "loggedInUser": "Crime caseworker",

  // Default crime case
  "defaultCrimeCaseNo": "1000001CR",

    // Default civil case
  "defaultCivilCaseNo": "1000010CV"
  }
