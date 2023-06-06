const { ApolloServer } = require('apollo-server');
const mongoose = require("mongoose");

const MONGODB = "mongodb://localhost:27017/usersQraphql";

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true // Enable the GraphQL playground
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MONGODB connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
