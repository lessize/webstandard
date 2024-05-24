const array1 = ['a', 'b', 'c'];

array1.forEach((ele, idx, arr) => {
  ele = ele.toUpperCase();
  console.log(ele, idx, arr)
});