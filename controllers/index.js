const router = require('express').Router();
const home = require('./home');
const events = require('./events');
const merch = require('./merch');


router.use('/', home);
router.use('/events', events);
router.use('/merch', merch);



module.exports = router;
