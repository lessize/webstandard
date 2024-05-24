const persons = [
  {name : 'Allen', age : 30, gender : 'male'},
  {name : 'Bella', age : 20, gender : 'female'},
  {name : 'Carl', age : 10, gender : 'male'}
];

// 1) 나이의 합을 구하시오
let sumOfAge = 0;
persons.forEach( ele => sumOfAge += ele.age );
console.log(sumOfAge);
console.log('--------');

// 2) 남자는 몇 명인가?
const result = persons.filter( (ele, idx, arr) => ele.gender == 'male' );
console.log(result.length);
console.log('--------');

// 3) 최연소자의 이름은?
const age = persons.map(ele => ele.age).sort()[0];
console.log(age);
const name = persons.filter( ele => ele.age == 10 )[0].name;
console.log(name);
console.log('--------');

// 4) 나이 오름차순으로 이름을 출력하시오
// 오름차순
const result2 = persons.sort( (first, second) => first.age - second.age );
// console.log(results2);
result2.forEach( ele => console.log(ele.name));
console.log('--------');

// 내림차순
const result3 = persons.sort( (first, second) => second.age - first.age );
// console.log(results3);
result3.forEach( ele => console.log(ele.name));