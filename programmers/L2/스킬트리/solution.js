function solution(skill, skill_trees) {
  let answer = 0;

  const essential = [...skill];

  skill_trees.forEach((list) => {
    let index =
      list.match(essential[0]) === null ? null : list.match(essential[0]).index;
    let result = true;
    console.log(list, index);
    for (let i = 1; i < essential.length; i++) {
      const res = list.match(essential[i]);
      if (index === null) {
        if (res !== null) result = false;
      } else {
        if (res === null) {
          index = null;
        } else {
          if (index < res.index) {
            index = res.index;
          } else {
            result = false;
          }
        }
      }
    }

    if (result) answer += 1;
  });

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));

// skill	skill_trees	                        return
// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2
