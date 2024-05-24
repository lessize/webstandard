{
  let x = 10;
let y = 'a';

let result = x / y;
console.log(result);
}
{
  const arr = [1, 2, 3];
  console.log('시작');
  console.log(arr[3]);
  console.log('끝');
}
{
  console.log('시작');
  try{
    // 예외가 예상되는 코드
    let x = y; // error 발생
  } catch(err) {
    // 예외가 발생되었을 때 실행될 코드
    // console.log(err); // 에러코드 출력
    console.log(Object.prototype.toString.call(err)); // 에러코드 출력
    console.log(err.message);
    console.log(err.cause);
    console.log(err.toString());
  } finally {
    // 예외 유무 상관없이 실행될 코드
    console.log('에러 유무 상관없이  실행됨!');
  }
  
  console.log('종료');
}