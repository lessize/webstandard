{
  const persons = [
    { name:'allen', age:30, gender:'male' },
    { name:'betty', age:20, gender:'female' },
    { name:'carl', age:40, gender:'male' },
    { name:'daliah', age:40, gender:'female' }
  ];

  // 10세 이상 여성
  const filteredPersons = persons.filter((ele, idx, arr) => { return ele.gender == 'female' && ele.age >= 10});
  console.log(filteredPersons);

  // 10세 이상 여성의 이름
  const names = persons.filter(ele => ele.gender == 'female' && ele.age >= 10) // [ { name: 'betty', age: 20, gender: 'female' } ]
                       .map(ele => ele.name) // [ 'betty' ]
                       .forEach(ele => console.log(ele));
}