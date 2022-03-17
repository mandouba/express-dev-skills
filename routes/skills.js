var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// }); suppose to delete this code originally

 // All actual paths start with "/skills"

 // Require the controller that exports To-Do CRUD functions
 var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/todos"

 // GET /todos
 router.get('/', skillsCtrl.index);
 router.get('/:id', skillsCtrl.show);

module.exports = router;
