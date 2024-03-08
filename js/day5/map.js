{const arr = [1, 2, 3];

const result = arr.map((ele, idx, arr) => ele);

console.log(result);}

{
  const persons = [
    { name:'alice', age:30 },
    { name:'bill', age:20 },
    { name:'clare', age:40 }
  ];

  const ageOfPerson = persons.map(ele => ele.age);
  console.log(ageOfPerson);
  const nameOfPerson = persons.map(ele => ele.name);
  console.log(nameOfPerson);
}