/*
아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해보이시오.

3) 배열의 모든 요소를 더하는 함수 만들기. 
   sumArray라는 이름의 함수를 정의해보세요.
   이 함수는 숫자로 이루어진 배열을 매개변수로 받아 그 합을 반환해야 합니다.
*/

// 1) 함수 선언문
{
  let sum = 0;
  const arr = [1, 2, 3, 4, 5];
  function sumArray(arr){
    for(let ele of arr){
      sum += ele;
    }
    return sum;
  }
  console.log(sumArray(arr));
}

// 2) 함수 표현식
{
  let sum = 0;
  const sumArray = function(arr){
    for(let ele of arr){
      sum += ele;
    }
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}

// 3) 화살표 함수
{
  let sum = 0;
  const sumArray = (arr) => {
    for(let ele of arr){
      sum += ele;
    }
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}