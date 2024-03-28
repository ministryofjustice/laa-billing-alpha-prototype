//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/my-claims', function(request, res) {
  
    var claimNo = request.session.data.claimNo;
    var theClaim = null;
  
    // find the application
    for (const clm of request.session.data.sampleCaseListData) {
        if (clm.claimRef === request.session.data.claimNo)
        theClaim = clm;
      }
});


// URL test submit
router.get('/url-routing', function(request, response) {

  var theClaim = null;

  var claimNo = request.session.data.claimNo;

  for (const clm of request.session.data.sampleCaseListData) {
    if (clm.claimRef === request.session.data.claimNo)
    theClaim = clm;
  }

  response.render("playground/result")

})

// URL test submit
router.get('/url-simple', function(request, response) {

  var claimNo = request.session.data.claimNo;

    theClaim = claimNo;
    response.render("playground/result") + "?" + theClaim

})