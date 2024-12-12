function solution(genres, plays) {
  const genreMap = new Map();
  const genrePlays = new Map();
  const albumList = [];

  genres.forEach((g, i) => {
    if (!genreMap.has(g)) {
      genreMap.set(g, []);
    }
    const genre = genreMap.get(g);
    genre.push({
      id: i,
      plays: plays[i],
    });
  });

  for (const [key, value] of genreMap) {
    const total = value.reduce((acc, cur) => acc + cur.plays, 0);
    genrePlays.set(key, total);
  }

  [...genrePlays.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach((g) => {
      const genre = genreMap.get(g[0]);
      albumList.push(
        genre
          .sort((a, b) => {
            if (b.plays === a.plays) {
              return a.id - b.id;
            }
            return b.plays - a.plays;
          })
          .slice(0, 2)
          .map((a) => a.id)
      );
    });

  return albumList.flat();
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
