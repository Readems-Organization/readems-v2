const router = require('express').Router();
const subscribeControllers = require('../controllers/subscribesControllers');

router.post('/email', subscribeControllers.subscribesEmail);

module.exports = router;
