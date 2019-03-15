require('dotenv').config();
let config={
    port : process.env.PORT || 8080
};
console.log(process.env.PORT );
module.exports=config;