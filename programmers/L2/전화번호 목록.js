function solution(phone_book) {
  var answer = true;

  const map = {};

  // 어떻게 맵으로 중복을 찾을 수 있을까?
  phone_book.forEach((phone, i) => {
    map[phone] = true;
    if (i > 0) {
      Object.keys(map).forEach((key) => {
        if (key.includes(phone)) {
          answer = false;
        }
      });
    }
  });

  return answer;
}
