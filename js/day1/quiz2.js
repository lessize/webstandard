/*
아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해보이시오.

2) 문자열 결합 함수 만들기. 
   concatStrings라는 이름의 함수를 정의해보세요.
   이 함수는 두 개의 문자열을 매개변수로 받아 하나의 문자열로 합쳐 반환해야 합니다.
*/

// 1) 함수 선언문
{
  function concatStrings(str1, str2) {
    let str = str1 + str2;
    return str;
  }
  console.log(concatStrings('KH', ' 인재 교육원'));
}

// 2) 함수 표현식
{
  const concatStrings = function(str1, str2) {
    let str = str1 + str2;
    return str;
  }
  console.log(concatStrings('KH', ' 인재 교육원'));
}

// 3) 화살표 함수
{
  const concatStrings = (str1, str2) => str1 + str2;
  console.log(concatStrings('KH', ' 인재 교육원'));
}