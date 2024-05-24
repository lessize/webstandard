/*
아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해보이시오.

1) 두 수의 차이(절대값)를 구하는 함수 만들기. 
   calculateDifference라는 이름의 함수를 정의해보세요.
   이 함수는 두 개의 숫자를 매개변수로 받아 두 수의 차이를 반환해야 합니다.
*/

// case1) 함수 선언문
{
  console.log(calculateDifference(10, 20));
  function calculateDifference(x, y){
    let result = x - y;
    if(result < 0){
      result *= -1; // result = result * -1;
    }
    return result;
  }
}

// case2) 함수 표현식
{
  const calculateDifference = function(x, y){
    let result = x - y;
    if(result < 0){
      result *= -1; 
    }
    return result;
  }
  console.log(calculateDifference(10, 20)); 
}

// case3) 화살표 함수
{
  const calculateDifference = (x, y) => {
    let result = x - y;
    if(result < 0){
      result *= -1; 
    }
    return result;
  }
  console.log(calculateDifference(10, 20));
}