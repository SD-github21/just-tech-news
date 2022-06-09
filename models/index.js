const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
// one to many
User.hasMany(Post, {
    foreignKey: 'user_id'
})

// one to one
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// many to many
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});


Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// a particular vote can only belong to one user
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// a particular vote can only belong to one post
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// a user can have many votes
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// a post can have many votes
Post.hasMany(Vote, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Vote };