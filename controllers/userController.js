const User = require('../model/user');

class Users {
    constructor(){
        console.log("i am running");
    }

     all_users(req,res){
        User.findAll( {attributes: ['id', 'username', 'email','password']}).then(users => {
            res.json(users);
          })
    }

}

module.exports=Users;