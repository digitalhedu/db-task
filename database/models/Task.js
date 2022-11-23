module.exports = (Sequelize, DataTypes) => {
  let alias = "task";
  let columns = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userid:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
  let options = {
    underscored: false,
    timestamps: false,
  }
  let Task = Sequelize.define(alias, columns, options)

  Task.associate = function(models) {
    Task.belongsTo(models.user,{
      foreignKey:'userid',
      as:'user',
    })
  }
}