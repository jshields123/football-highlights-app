function renderPost(sportData){
    let postTitleHTML = `<p>${sportData[randTeam]['title']}</p>`
    let postVideoHTML = `<p>${sportData[randTeam]['videos'][0]['embed']}</p>`
    return `${postTitleHTML}${postVideoHTML}`
}

getSportData().then(post => {
let rendered = renderPost(post)
document.getElementById("main").innerHTML = rendered
})