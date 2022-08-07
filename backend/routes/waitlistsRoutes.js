const router = require('express').Router();
const waitlistControllers = require('../controllers/waitlistController');

router.post('/waitlists', waitlistControllers.signUp);

module.exports = router;
