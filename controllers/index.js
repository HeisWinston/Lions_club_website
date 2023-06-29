const router = require('express').Router();
const home = require('./home');
const events = require('./events');
const merch = require('./merch');
const sign_up = require('./sign_up');


router.use('/', home);
router.use('/events', events);
router.use('/merch', merch);
router.use('/sign_up', sign_up);



module.exports = router;
