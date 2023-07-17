const router = require('express').Router();
const home = require('./home');
const events = require('./events');
const merch = require('./merch');
const user = require('./user');
const forum = require('./forum');

router.use('/', home);
router.use('/events', events);
router.use('/merch', merch);
router.use('/user', user);


module.exports = router;
