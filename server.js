const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');


const sequelize = require('./config/connection');
const app = express();
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // milliseconds ref: http://expressjs.com/en/resources/middleware/session.html
    maxAge: 86400000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


const PORT = process.env.PORT || 3001

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.use(express.json());
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})
