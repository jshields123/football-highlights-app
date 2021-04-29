
function renderPostforRandom(sportData) {
  let postTitleHTML = `<h3>${sportData[randTeam]["title"]}</h3>`;
  let postDateHTML = `<h3>${sportData[randTeam]["date"]}</h3>`;
  let postVideoHTML = `<div>${sportData[randTeam]["videos"][0]["embed"]}</div>`;
  return `${postTitleHTML}${postDateHTML.slice(0, 13)}${postVideoHTML}`;
}

getSportData().then((post) => {
  let rendered = renderPostforRandom(post);
  document.getElementById("main").innerHTML = rendered;
});

function renderPostforFind(teams) {
  let postTitleHTML = `<h3>${teams["title"]}</h3>`;
  let postDateHTML = `<h3>${teams["date"]}</h3>`;
  let postVideoHTML = `<div>${teams["videos"][0]["embed"]}</div>`;
  return `${postTitleHTML}${postDateHTML.slice(0, 13)}${postVideoHTML}`;
}

