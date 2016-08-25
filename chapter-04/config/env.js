// get Env variable / cloudinary
module.exports = function(app, configEnv) {

    var dotenv = require('dotenv');
    dotenv.load();
    var cloudinary = require('cloudinary').v2;
    // Log some messages on Terminal
    if ( typeof(process.env.CLOUDINARY_URL) == 'undefined' ){
      console.log('Cloudinary config file is not defined');
      console.log('Setup CLOUDINARY_URL or use dotenv mdule file')
    } else {
      console.log('Cloudinary config, successfully used:');
      console.log(cloudinary.config())
    }
}
