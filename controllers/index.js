const router = require('express').Router();
const home = require('./home');
const events = require('./events');
const merch = require('./merch');
const user = require('./user');
const forum = require('./forum');
const post_login_home = require('./post_login_home');


router.use('/', home);
router.use('/events', events);
router.use('/merch', merch);
router.use('/sign_up', sign_up);
router.use('/post_login_home', post_login_home);




module.exports = router;
