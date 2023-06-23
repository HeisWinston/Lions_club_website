const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//the top part is template for production db
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    //this is to run with local set up
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
    // {
    //   host: 'x71wqc4m22j8e3ql.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //   dialect: 'mysql',
    //   port: 3306
    // }
  );
}

module.exports = sequelize;
