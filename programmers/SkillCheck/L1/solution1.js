function solution(absolutes, signs) {
  return absolutes.reduce((acc, num, index) => {
    if (signs[index]) {
      return acc + num;
    } else {
      return acc - num;
    }
  }, 0);
}

// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
