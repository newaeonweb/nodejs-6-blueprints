// import modules
var async = require('async');
var crypto = require('crypto');
var passport = require('passport');
var User = require('../models/User');

// authorization middleware
exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};

// login GET
exports.loginGet = function(req, res) {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('login', {
    title: 'Log in'
  });
};

// login POST
exports.loginPost = function(req, res, next) {
  // validate login form fields
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Empty email not allowed').notEmpty();
  req.assert('password', 'Empty password not allowed').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    // Show errors messages for form validation
    req.flash('error', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', function(err, user, info) {
    if (!user) {
      req.flash('error', info);
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      res.redirect('/');
    });
  })(req, res, next);
};

// logout
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

// signup GET
exports.signupGet = function(req, res) {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('signup', {
    title: 'Sign up'
  });
};

// signup POST
exports.signupPost = function(req, res, next) {
  // validate sign up form fields
  req.assert('name', 'Empty name not allowed').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Empty email is not allowed').notEmpty();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    // Show errors messages for form validation
    req.flash('error', errors);
    return res.redirect('/signup');
  }

  // Verify user email
  User.findOne({ email: req.body.email }, function(err, user) {
    if (user) {
      // if used, show message and redirect
      req.flash('error', { msg: 'The email is already taken.' });
      return res.redirect('/signup');
    }
    // create an instance of user model with form data
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    // save user
    user.save(function(err) {
      req.logIn(user, function(err) {
        res.redirect('/');
      });
    });
  });
};

// profile account page
exports.accountGet = function(req, res) {
  res.render('profile', {
    title: 'My Account'
  });
};

// update profile and change password
exports.accountPut = function(req, res, next) {
  // validate sign up form fields
  if ('password' in req.body) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirm', 'Passwords must match').equals(req.body.password);
  } else {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Empty email is not allowed').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });
  }

  var errors = req.validationErrors();

  if (errors) {
    // Show errors messages for form validation
    req.flash('error', errors);
    return res.redirect('/pages');
  }

  User.findById(req.user.id, function(err, user) {
    // if form field password change
    if ('password' in req.body) {
      user.password = req.body.password;
    } else {
      user.email = req.body.email;
      user.name = req.body.name;
    }
    // save user data
    user.save(function(err) {
      // if password field change
      if ('password' in req.body) {
        req.flash('success', { msg: 'Password changed.' });
      } else if (err && err.code === 11000) {
        req.flash('error', { msg: 'The email is already taken.' });
      } else {
        req.flash('success', { msg: 'Profile updated.' });
      }
      res.redirect('/account');
    });
  });
};

// profile DELETE
exports.accountDelete = function(req, res, next) {
  User.remove({ _id: req.user.id }, function(err) {
    req.logout();
    req.flash('info', { msg: 'Account deleted.' });
    res.redirect('/');
  });
};