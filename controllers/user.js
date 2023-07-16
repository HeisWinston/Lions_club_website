const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage', { layout: 'sign_up', logged_in: req.session.logged_in });
})

router.post('/sign_up', async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      console.log(userData);
      //added this to get user ID saved to session///ANA
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
  console.log("ROUTE TEST");
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Incorrect Email. Please try again!' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect Password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // console.log(
      //   '~ file: userRoutes.js ~ line 40 ~ req.session.save ~ req.session.cookie',
      //   req.session.cookie
      // );
      console.log(req.session);
      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });

    });
  }
  catch (err) {
    console.log('login error')
    res.status(500).json(err);
  }
});


module.exports = router;

