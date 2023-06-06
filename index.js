const { ApolloServer } = require('apollo-server')
const mongoose = require("mongoose")

const MONGODB = "mongodb://localhost:27017"

//Apollo server
//typeDef : graphql type definition 
//resolver : How do we resolve queries/mutations 

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() =>{
        console.log("MONGODB connected")
        return server.listen({port : 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });