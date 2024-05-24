{  
  // 숫자 입력
  const $btns = document.querySelectorAll('li');
  const $result = document.getElementById('result');
  function calc(evt){
    try {
      // 연산
    if(evt.target.textContent == '='){
      $result.value = window.eval($result.value);
    }else{
      $result.value += evt.target.textContent;
    } 
    } catch { // 올바르지 않은 계산식
      $result.value = 'Error';
    }
    
    // 배경색 변경
    $btns.forEach(ele => {
      ele.classList.remove('on');
    })
    evt.target.classList.add('on');
  };
  $btns.forEach(ele => {
    ele.addEventListener('click', calc)
  });

  // all clear
  document.getElementById('clear').addEventListener('click', evt => {
    $result.value = '';
  });
}
