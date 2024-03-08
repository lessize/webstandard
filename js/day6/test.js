const url = 'https://apis.data.go.kr/B551011/KorService1/searchFestival1';
const MobileOS = 'ETC'
const MobileApp = 'AppTest';
const _type = 'json';
const eventStartDate ='20240101';
const servicekey = 'dHmiwPi0I6OCKvG3WZGhzPTGl9u4MGhD604FcQ5jS605D2Y5Mhtwun7qFECfLlTfJkvj8bEGemyP6uNcFqmlNw%3D%3D';

const url2 = 'https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=dHmiwPi0I6OCKvG3WZGhzPTGl9u4MGhD604FcQ5jS605D2Y5Mhtwun7qFECfLlTfJkvj8bEGemyP6uNcFqmlNw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&eventStartDate=20240101&numOfRows=100&pageNo=1';
fetch(url2)
  .then(res => res.json())  // json 포맷의 문자열을 js 객체로 변경
  .then(json => json.response.body.items.item)
  .then(item => {
    item.forEach(ele => {
      console.log(ele.eventstartdate, ele.title);
    });
  });