const router = require('express').Router();
const { Newsletter } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage', { layout: 'home', logged_in: req.session.logged_in });
})

router.post('/newsletter', async (req, res) => {
    try {
      const newsletterData = await Newsletter.create({
        email: req.body.email,
      });
      res.status(200).json(newsletterData);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
    console.log("Newsletter Route");
  });

module.exports = router;