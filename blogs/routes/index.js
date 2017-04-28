var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// module.exports = function(app) {

router.get('/',function (req, res) {
  res.render('index', {title: '主页'});
});

router.get('/login', function (req, res) {
  res.render('login', {title: '登录'});
});

  // app.post('/login', function (req, res) {
  // });
// };

module.exports = router;
