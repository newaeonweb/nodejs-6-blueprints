var express = require('express'),
    router = express.Router(),
    schema = require('../models/book'),
    Picture = schema.models.Picture,
    cloudinary = require('cloudinary').v2,    
    fs = require('fs'),
    multipart = require('connect-multiparty'),
    multipartMiddleware = multipart();


module.exports = function (app) {
  app.use('/', router);
};
// Get pictures list
router.get('/books', function (req, res, next) {

    Picture.all().then(function (photos) {
        console.log(photos);

      res.render('book/books', {
          title: 'PhotoBook',
          photos: photos,
          cloudinary: cloudinary
      })
    });

});
// Get form upload
router.get('/books/add', function (req, res, next) {

    res.render('book/add-photo', {
      title: 'Upload Picture'
    });
});
// Post to
router.post('/books/add', multipartMiddleware, function (req, res, next) {
    // Checking the file received
    console.log(req.files);
    // create a new instance using Picture Model
    var photo = new Picture(req.body);
    // Get temp file path
    var imageFile = req.files.image.path;
    // Upload file to Cloudinary
    cloudinary.uploader.upload(imageFile,
      {
        tags: 'photobook',
        folder: req.body.category + '/',
        public_id: req.files.image.originalFilename
        // eager: {
        //   width: 280, height: 200, crop: "fill", gravity: "face"
        // }
      })
        .then(function (image) {
          console.log('Picture uploaded to Cloudinary');
          // Check the image Json file
          console.log(image);
          // Added image informations to picture model
          photo.image = image;
          // Save photo with image metadata
          return photo.save();
        })
        .then(function (photo) {
          console.log('Successfully saved');
          // Remove image from local folder
          var filePath = req.files.image.path;
          fs.unlinkSync(filePath);
        })
        .finally(function () {
          // Show the result with image file
          res.render('book/posted-photo', {
              title: 'Upload with Success',
              photo: photo,
              upload: photo.image
          });
        });

});
