require('dotenv').config();
const pgsql=require('sequelize');
const config= process.env.DATABASE_URL;
const sequelize = new pgsql(config);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports=sequelize;