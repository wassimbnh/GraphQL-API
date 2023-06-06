const User = require('../models/userModel');

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
        async createUser(_, {userInput: {name}}){
            const createdUser = new User({
                name: name
            });

            const res = await createdUser.save();
            console.log(res._doc);
            return {
                id: res.id,
                ...res._doc 
            }
            },

        async deleteUser(_, {ID}){
           const wasDeletd = (await User.deleteOne({_id: ID})).deletedCount;
           return wasDeletd;
        },

        async editUser(_,{ID, userInput:{name,age}}){
            const wasEdited = (await User.updateOne({_id: ID}, {name: name, age: age})).modifiedCount;
            return wasEdited;
        }
    }
}