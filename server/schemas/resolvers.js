const { User, Thought } = require('../models');

// resolver serves as the response for the helloWorld query in typeDefs.js
const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            // ? checks if username exists; if yes, set params to an object with username key set to the vlaue, otherwise return empty object
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers;