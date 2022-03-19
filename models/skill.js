const skills = [
    {id: 1020, skill: 'CSS', level: false},
    {id: 1030, skill: 'JavaScript', level: true},
    {id: 1040, skill: 'HTML', level: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,

  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
 // URL params are strings - convert to a number
 id = parseInt(id);
 return skills.find(skill => skill.id === id);
}
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000
    // new skills wouldnt be done 
    skill.level = false;
    skills.push(skill);

  }

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }


 