// 고차함수 : 함수의 매개값으로 함수를 전달받는 함수
//           또는 함수를 반환하는 함수

// 1) Array.prototype.forEach()
{
  const arr = [1, 2, 3];
  function multifly2X(x) {
    console.log( x * 2 );
  }
  
  // // 함수 객체 주솟값 참조
  // const x = multifly2X;
  // console.log(multifly2X(2));
  // console.log(x(2));

  // // 함수 호출
  // const y = multifly2X(2);
  // console.log(y);

  arr.forEach(multifly2X);

  arr.forEach(function multifly2X(x) {
    console.log( x * 2 );
  });

  arr.forEach((x) => console.log( x * 2 ));
}

{
  const arr = [1, 2, 3];
  arr.forEach((ele, idx, arr) => {
    console.log(ele, idx, arr);
  });
}