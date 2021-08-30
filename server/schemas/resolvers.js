const { User, Thought } = require('../models');

// resolver serves as the response for the helloWorld query in typeDefs.js
const resolvers = {
    Query: {
        // get all thoughts
        thoughts: async (parent, { username }) => {
            // ? checks if username exists; if yes, set params to an object with username key set to the vlaue, otherwise return empty object
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },
        // get thought by id
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find() 
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        }
    }
};

module.exports = resolvers;