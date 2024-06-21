//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Include other version routes files
require('./routes/v1.js')
require('./routes/v2.js')
require('./routes/v3.js')

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

// Change user route
router.post('/changeuser', function(request, response) {

  var loggedInUser = request.session.data['logged-in-user']

  response.redirect("index")

})