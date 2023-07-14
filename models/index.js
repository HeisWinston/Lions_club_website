const User = require('./User');

// Post.belongsTo(User, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE'
// })
// Post.belongsTo(Category, {
//   foreignKey: 'type',
//   onDelete: 'CASCADE'
// })

// Category.hasMany(Post, {
//   foreignKey: 'type',
//   onDelete: 'CASCADE'
// })

// Plants.hasMany(Collection, {
//   foreignKey: 'plant_id',
//   onDelete: 'CASCADE'
// })
// Collection.belongsTo(Plants)

module.exports = {
  User
}