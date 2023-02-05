function solution(alp, cop, problems) {
  let time = 0;

  //현재 공부량
  let [myAlp, myCop] = [alp, cop];

  //목표 공부 량
  let [goalAlp, goalCop] = [0, 0];

  const sortedProblems = problems.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < problems.length; i += 1) {
    const [reqAlp, reqCop, RwdAlp, RwdCop, cost] = sortedProblems[i];

    //1. 알고력을 먼저 비교
    

    //2. 코딩력을 비교
  }

  var answer = 0;
  return answer;
}
