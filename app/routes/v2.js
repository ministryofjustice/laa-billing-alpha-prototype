const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/v2')

const version = 'v2'

router.get('/test2', function(request, response) {
    response.send('This is a message from v2')
})

// Simple search route
router.post('/searchforclaim', function(request, response) {

    var claimSearch = request.session.data['claim-search']
  
    response.redirect("core-journey/claim-search")
  
  })
  
  // Simple search route
  router.post('/changeuser', function(request, response) {
  
    var loggedInUser = request.session.data['logged-in-user']
  
    response.redirect("index")
  
  })
  
  // Simple add column demo route
  router.post('/addcolumn', function(request, response) {
  
    var checkbox = request.session.data['columnchoice']
  
    response.redirect("concept-playground/my-claims-with-top-filters")
  
  })
  
  
  // Simple search route
  router.post('/v2adjustmentgroupby', function(request, response) {
  
    var whatGroupBy = request.session.data['whatGroupBy']
  
    response.redirect("core-journey/claim-apply-adjustments#adjustmentsection")
  
  })
  
  
  // Simple search route
  router.post('/v2civilexpensessortby', function(request, response) {
  
    var expenseSortBy = request.session.data['expenseSortBy']
  
    response.redirect("claim-assessment/civil-certificated/new-expense#adjustmentsection")
  
  })
  
  // Simple search route
  router.post('/v2civilgraduatedsortby', function(request, response) {
  
    var expenseSortBy = request.session.data['expenseSortBy']
  
    response.redirect("claim-assessment/civil-certificated/new-graduated#adjustmentsection")
  
  })