export default (sequelize, DataTypes) => {
  return sequelize.define('Session', {
    name: DataTypes.STRING,
    time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  })
}
