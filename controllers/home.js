const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage', { layout: 'home', logged_in: req.session.logged_in });
})


module.exports = router;