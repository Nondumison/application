const Sequelize = require("sequelize");
const EntriesModel = require("../models/entries");
const TypesModel = require("../models/types");
const {
  DATABASE_NAME,
  USERNAME,
  PASSWORD,
  HOST,
  DIALECT
} = require("../constants");
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
const Types = TypesModel(sequelize, Sequelize);
const Entries = EntriesModel(sequelize, Sequelize);
// Entries has Many types
Entries.hasMany(Types);
sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created here!`);
});
module.exports = {
  Entries,
  Types
};
