const express = require('express');
const app = express.Router();
<<<<<<< HEAD
const func = require('./scripts/helper-functions');
=======
const func = require('../lib/user-helper');
const middleware = require('../middleware');
>>>>>>> 86fa8a3e78e7575b54798638206b36f7eacce4a3

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
    res.render("index");
});

// Login Page
app.route('/login')
  .get((req, res) => {
    func.loginCheck(req, res);
    res.render('login', func.templateVars);
  }) 

<<<<<<< HEAD
  .post((req, res) => {
    func.errorCheck(req, res);
    func.userAuthentication(req, res);
=======
  .post(middleware.errorCheck, middleware.userAuthentication, (req, res) => {
    const users = {
      email: req.body.email,
    }
    func.loginUser(users, res.redirect);
    
>>>>>>> 86fa8a3e78e7575b54798638206b36f7eacce4a3
  });

// logout current user
app.route('/logout')
  .post((req, res) => {
    // req.session.email = null;
    delete req.session;
    res.redirect('/login');
  });

// Registration Page
app.route('/register')
  .get((req, res) => {
    func.loginCheck(req, res);
    res.render('register');
  })
  .post(middleware.errorCheck, middleware.registerValidator, (req, res) => {
    // registration
<<<<<<< HEAD
    func.errorCheck(req, res);
    // check if user in database
    // create user in database
    res.render('index');
=======
    res.send('register post route');
>>>>>>> 86fa8a3e78e7575b54798638206b36f7eacce4a3
  });

//  New Resource Page

app.route('/resources/new')
  .get((req, res) => {
    res.render('new-resource', func.templateVars);
  })
  .post((req, res) => {
    // function to create new resource
    // 
    res.render('index', func.templateVars);
  });

// View all resources

app.route('/resources')
  .get((req, res) => {
    res.send('resources get route');
  })

// View specific resource

app.route('/resources/:id')
  .get((req, res) => {
    res.send('resources/:id get route');
  })

// Comment/Like/Rate specific resource

app.route('/resources/:id/comment')
  .post((req, res) => {
    res.send('resources/:id/comment post route');
  })

app.route('/resources/:id/rate')
  .post((req, res) => {
    res.send('resources/:id/rate post route');
  })

app.route('/resources/:id/like')
  .post((req, res) => {
    res.send('resources/:id/like post route');
  })

// User profile page

app.route('/users/:id')
  .get((req, res) => {
    res.send('users/:id get route');
  })

// User update/edit page

app.route('/users/:id/update')
  .get((req, res) => {
    res.send('users/:id/update get route');
  })
  .post((req, res) => {
    res.send('users/:id/update post route');
  })

app.route('/users/:id/resources')
  .get((req, res) => {
    res.send('/users/:id/resources');
  })

app.route('/*').get((req, res) => {
    res.send('404 Page not found');
  });

module.exports = app;

