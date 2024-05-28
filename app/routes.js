//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// ---------------
// CONSOLE LOGGING
// ---------------

// Logging session data viewable in console log
  
router.use((request, response, next) => {    
  const log = {  
    method: request.method,  
    url: request.originalUrl,  
    data: request.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
 
next()  
}) 

// See where coming from and currently on
router.use('/', (request, response, next) => {  
  response.locals.currentURL = request.originalUrl; 
  response.locals.prevURL = request.get('Referrer');

console.log('current screen: ' + response.locals.currentURL);
console.log('previous screen: ' + response.locals.prevURL );

  next();  
});

// Simple search route
router.post('/searchforclaim', function(request, response) {

  var claimSearch = request.session.data['claim-search']

  response.redirect("current/claim-search")

})

// Simple search route
router.post('/changeuser', function(request, response) {

  var loggedInUser = request.session.data['logged-in-user']

  response.redirect("index")

})

// Simple add column demo route
router.post('/addcolumn', function(request, response) {

  var checkbox = request.session.data['columnchoice']

  response.redirect("current/concept-playground/my-claims-with-top-filters")

})


// Simple search route
router.post('/v2civilgroupby', function(request, response) {

  var whatGroupBy = request.session.data['whatGroupBy']

  response.redirect("current/claim-apply-adjustments")

})