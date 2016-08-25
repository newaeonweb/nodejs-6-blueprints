// Import modules
var fs = require('fs');
var mime = require('mime');
// get gravatar icon from email
var gravatar = require('gravatar');

// get video model
var Videos = require('../models/videos');
// set image file types
var VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg', 'video/ogv'];

// List Videos
exports.show = function(req, res) {

    Videos.find().sort('-created').populate('user', 'local.email').exec(function(error, videos) {
        if (error) {
            return res.status(400).send({
                message: error
            });
        }
        // Render result
        console.log(videos);
        res.render('videos', {
            title: 'Videos Page',
            videos: videos,
            gravatar: gravatar.url(videos.email ,  {s: '80', r: 'x', d: 'retro'}, true)
        });
    });
};
// Create Videos
exports.uploadVideo = function(req, res) {
    var src;
    var dest;
    var targetPath;
    var targetName;
    console.log(req);
    var tempPath = req.file.path;
    //get the mime type of the file
    var type = mime.lookup(req.file.mimetype);
    // get file extenstion
    var extension = req.file.path.split(/[. ]+/).pop();
    // check support file types
    if (VIDEO_TYPES.indexOf(type) == -1) {
        return res.status(415).send('Supported video formats: mp4, webm, ogg, ogv');
    }
    // Set new path to images
    targetPath = './public/videos/' + req.file.originalname;
    // using read stream API to read file
    src = fs.createReadStream(tempPath);
    // using a write stream API to write file
    dest = fs.createWriteStream(targetPath);
    src.pipe(dest);

    // Show error
    src.on('error', function(error) {
        if (error) {
            return res.status(500).send({
                message: error
            });
        }
    });

    // Save file process
    src.on('end', function() {
        // create a new instance of the Video model with request body
        var video = new Videos(req.body);
        // Set the video file name
        video.videoName = req.file.originalname;
        // Set current user (id)
        video.user = req.user;
        // save the data received
        video.save(function(error) {
            if (error) {
                return res.status(400).send({
                    message: error
                });
            }
        });
        // remove from temp folder
        fs.unlink(tempPath, function(err) {
            if (err) {
                return res.status(500).send({
                    message: error
                });
            }
            // Redirect to galley's page
            res.redirect('videos');

        });
    });
};
// Videos authorization middleware
exports.hasAuthorization = function(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
};
