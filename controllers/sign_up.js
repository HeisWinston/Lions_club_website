const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage', { layout: 'sign_up', logged_in: req.session.logged_in });
})


module.exports = router;

