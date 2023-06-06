const User = require('../models/User');

module.exports = {
    Query: {
        async user(_, {ID}){
            return await User.findById(ID)
        },
        async getUsers(_,{amount}){
            return await User.find().limit(amount);
        }
    },
    Mutation: {

    }
}