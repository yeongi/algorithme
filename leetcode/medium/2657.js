/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const c = [];

  for (let i = 0; i < A.length; i++) {
    const a = A.slice(0, i + 1).sort();
    const b = B.slice(0, i + 1).sort();
    let res = 0;
    a.forEach((t, i) => {
      if (b.includes(t)) {
        res += 1;
      }
    });
    c.push(res);
  }

  return c;
};
