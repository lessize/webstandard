{
  const persons = [
    { name:'allen', age:30, gender:'male' },
    { name:'betty', age:20, gender:'female' },
    { name:'carl', age:40, gender:'male' },
    { name:'daliah', age:30, gender:'female' }
  ];

  // 처음 발견된 나이가 20인 사람
  const finededPerson = persons.find(ele => ele.age == 20);
  console.log(finededPerson);

  // 처음 발견된 나이가 30인 사람의 위치
  const finededIdxPerson = persons.findIndex(ele => ele.age == 30);
  console.log(finededIdxPerson);

  // 뒤에서부터 발견된 나이가 30인 사람의 위치
  const finededIdxPerson2 = persons.findLastIndex(ele => ele.age == 30);
  console.log(finededIdxPerson2);
}