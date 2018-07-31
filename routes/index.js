const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/project1', (req, res, next) => {
  res.render('project1');
});

router.get('/project2', (req, res, next) => {
  res.render('project2');
});

router.get('/project3', (req, res, next) => {
  res.render('project3');
});

router.get('/project4', (req, res, next) => {
  res.render('project4');
});

router.get('/project5', (req, res, next) => {
  res.render('project5');
});

router.get('/project6', (req, res, next) => {
  res.render('project6');
});



router.get('/?referencias', (req, res, next) => {
  res.render('index');
});

module.exports = router;
