

function renderPost(sportData){
    let postTitleHTML = `<p>${sportData[randTeam]['title']}</p>`
    let postDateHTML = `<p>${sportData[randTeam]['date']}</p>`
    let postVideoHTML = `<div>${sportData[randTeam]['videos'][0]['embed']}</div>`
    return `${postTitleHTML}${postDateHTML.slice(0,13)}${postVideoHTML}`
}

getSportData().then(post => {
let rendered = renderPost(post)
document.getElementById("main").innerHTML = rendered
})

