// Array.prototype.reduce() 활용

const numbers = [3, 2, 3, 6, 1, 6];
// 문제1) 배열 요소의 평균을 구하시오.
{
  const sum = numbers.reduce((acc, ele) => acc + ele);
  const avg = sum / numbers.length;
  console.log(avg);

  const result = numbers.reduce((acc, curr, idx, arr) => (idx == arr.length - 1) ? acc + curr : (acc + curr) / arr.length, 0);
  console.log(result);
}
// 문제2) 배열 요소 중 최대값 구하기
{
  const max = numbers.reduce((acc, ele) => {
    if(acc > ele){
      return acc;
    }else{
      return ele;
    }
  });
  console.log(max);

  const result = numbers.reduce((acc, curr) => (acc > curr) ? acc : curr, 0);
  console.log(result);
}

const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
// 문제3) 과일의 갯수를 객체 리터럴로 출력하세요 ex) {banana:1, apple:2, orange:2} 
{
  const obj = {};
  fruits.forEach((ele) => {
    if(ele in obj){
      obj[ele]++;
    }else{
      obj[ele] = 1;
    }
  });
  console.log(obj);
}
{
  const result = fruits.reduce((acc, curr) => {
      if(curr in acc){
        acc[curr]++;
      }else{
        acc[curr] = 1;
      }
      return acc;
    }, {}
  );
  console.log(result);
}
{
  const result = fruits.reduce((acc, curr) => {
      acc[curr] = ( acc[curr] || 0 ) + 1;
      return acc;
    }, {}
  );
  console.log(result);
}