const {userController} = require('../controllers/index');
let users = new userController;
module.exports=(app)=>{
    app.route('/').get(users.all_users);
};