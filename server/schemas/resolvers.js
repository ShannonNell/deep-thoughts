// resolver serves as the response for the helloWorld query in typeDefs.js
const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!';
        }
    }
};

module.exports = resolvers;