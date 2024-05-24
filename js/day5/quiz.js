const persons = [
  { name:'allen', age:30, gender:'male' },
  { name:'betty', age:20, gender:'female' },
  { name:'carl', age:40, gender:'male' },
  { name:'daliah', age:30, gender:'female' }
];

// 문제1) persons 배열에서 남성 이름을 나이 내림차순으로 출력하시오
const filter = persons.filter(ele => ele.gender == 'male');
filter.sort((first, second) => { return second.age - first.age});
console.log(filter);

persons.filter(person => person.gender === 'male')
       .sort((first, second) => second.age - first.age)
       .forEach(person => console.log(person.name));