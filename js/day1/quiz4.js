/*
아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해보이시오.

4) 팩토리얼 구하는 함수 만들기. 
   factorial이라는 이름의 함수를 정의하되 내부에서 재귀적으로 자신을 호출하는 로직을 정의해보세요.
   이 함수는 하나의 숫자를 매개변수로 받아 그 숫자의 팩토리얼을 반환해야 합니다.
*/

// 1) 함수 선언문
{
  function factorial(n){
    if(n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(3));
}

// 2) 함수 표현식
{
  const factorial = function(n){
    if(n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(3));
}

// 3) 화살표 함수
{
  const factorial = (n) => {
    if(n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(3));
}