const sequelize = require('../config/connection');
const seedUser = require('./userSeeds');
const seedNewsletter = require('./newsletterseeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedNewsletter();

  process.exit(0);
};

seedAll();