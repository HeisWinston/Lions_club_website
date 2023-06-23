const router = require('express').Router();
const home = require('./home');
const events = require('./events');

router.use('/', home);
router.use('/events', events);


module.exports = router;
