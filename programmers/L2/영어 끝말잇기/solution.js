function solution(n, words) {
  const answer = [words[0]];
  let prev = words[0];
  let count = 1;
  let mistaker = 0;

  for (let i = 1; i < words.length; i += 1) {
    count += 1;
    if (answer.includes(words[i])) {
      mistaker = count % n === 0 ? n : count % n;
      count = Math.ceil(count / n);
      break;
    }

    if (isContinue(prev, words[i])) {
      answer.push(words[i]);
      prev = words[i];
    } else {
      mistaker = count % n === 0 ? n : count % n;
      count = Math.ceil(count / n);
      break;
    }

    if (i === words.length - 1) {
      count = 0;
      mistaker = 0;
    }
  }

  return [mistaker, count];
}

const isContinue = (a, b) => {
  if ([...a].pop() === [...b][0]) return true;
  return false;
};

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
