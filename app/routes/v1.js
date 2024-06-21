const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter('/v1')

const version = 'v1'

router.get('/test1', function(request, response) {
    response.send('This is a message from v1')
})

// Simple search route
router.post('/searchforclaim', function(request, response) {

    var claimSearch = request.session.data['claim-search']
  
    response.redirect("claim-search")
  
  })
  
  // Simple search route
  router.post('/changeuser', function(request, response) {
  
    var loggedInUser = request.session.data['logged-in-user']
  
    response.redirect("index")
  
  })
