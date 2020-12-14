module.exports = (sequelize, type) => {
  return sequelize.define("types", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typesName: {
      type: type.STRING,
      alllowNull: false
    },
    typesComment: {
      type: type.STRING,
      alllowNull: false
    }
  });
};
