const skills = [
    {id: 1020, skill: 'Playing Piano', level: false},
    {id: 1030, skill: 'JavaScript', level: true},
    {id: 1040, skill: 'Drawing', level: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
 // URL params are strings - convert to a number
 id = parseInt(id);
 return skills.find(skill => skill.id === id);
}
  

