const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        name: String
        age: Int
    }

    input UserInput {
        name : String
    }

    type Query {
        user(ID: ID!): User!
        getUsers(amount: Int): [User]
    }

    type Mutation {
        createUser(userInput: UserInput): User!
        deleteUser(ID: ID!): Boolean 
        editUser(ID: ID!, userInput: UserInput): Boolean
    }
`;

module.exports = typeDefs;
