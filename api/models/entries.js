module.exports = (sequelize, type) => {
  return sequelize.define("entry", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    entryDate: type.DATE,
    entryValue: type.DECIMAL,
    entryComment: type.STRING
  });
};
