const obj = {}; // 빈 객체 리터럴

// 객체 리터럴에 프로퍼티 추가하기
// 데이터 프로퍼티
obj.name = '홍길동';
obj.age = 30;
// 메소드 프로퍼티
obj.smile = function(){
  console.log('웃다');
}
console.log(obj);
obj.smile();

// 프로퍼티 존재유무 확인
// case1) in 연산자
if('name' in obj){
  console.log('존재함');
}else {
  console.log('존재하지 않음');
}
// case2) Object.prototype.hasOwnProperty();
console.log(obj.hasOwnProperty('name'));

// 객체 리터럴 순회하기
for(let pro in obj){
  console.log(pro);
}

// 프로퍼티 접근
// case1) 마침표 접근법
console.log(obj.name);
obj.smile();
// case2) 대괄호 접근법
console.log(obj['name']);
obj['smile'](); // obj.smile();

// 프로퍼티 제거
delete obj.name;
console.log(obj);

// 프로퍼티 키만 추출
console.log(Object.keys(obj));

// 프로퍼티 값만 추출
console.log(Object.values(obj));
Object.values(obj)[1](); // 배열의 두번째 요소인 함수 호출

// 프로퍼티 키, 값 양쪽 모두 호출
console.log(Object.entries(obj));

console.log(obj['name']);