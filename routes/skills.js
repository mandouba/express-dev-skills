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
 router.get('/new', skillsCtrl.new);
 router.get('/:id', skillsCtrl.show);
 router.post('/', skillsCtrl.create);
 router.delete('/:id', skillsCtrl.delete);
module.exports = router;
