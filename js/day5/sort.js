{
//유니코드 확인하기
const ch = ['0', '9', 'a', 'z', 'A', 'Z', '가', 'ㅎ'];
ch.forEach(ele => console.log(ele.charCodeAt(0)));

const arr = [3, 13, 1, 11, 2];
// 정렬방법을 제공하지 않으면 기본적으로 유니코드 크기로 정렬함
console.log(arr.sort());
// 오름차순
console.log(arr.sort((first, second) => first-second));
// 내림차순
console.log(arr.sort((first, second) => second-first));
}
{
  const persons = [
    { name:'allen', age:30, gender:'male' },
    { name:'betty', age:20, gender:'female' },
    { name:'carl', age:40, gender:'male' },
    { name:'daliah', age:30, gender:'female' }
  ];
  // 정렬 전
  console.log(persons);

  // 나이 오름차순으로 배열 요소를 정렬
  persons.sort((first, second) => { return first.age - second.age });
  console.log(persons);

  // 나이 내림차순으로 배열 요소를 정렬
  persons.sort((first, second) => { return second.age - first.age });
  console.log(persons);
}