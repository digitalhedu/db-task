module.exports = (Sequelize, DataTypes) => {
  let alias = "user";
  let columns = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  };
  let options = {
    underscored: false,
    timestamps: false,
  };
  let User = Sequelize.define(alias, columns, options);

  User.associate = function (models) {
    User.hasMany(models.task, {
      foreignKey: "userid",
      as: "tasks",
    });
  };
  return User;
};
