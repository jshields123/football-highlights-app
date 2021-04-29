async function findTeam() {
  let userInput = document.getElementById("text1").value;
  if (userInput !== null) {
    await getSportData().then((data) => {
      const newArray = data.filter((element) =>
        element.title.includes(userInput)
      );
      let result = newArray[0];
      let rendered = renderPostforFind(result);
      document.getElementById("main").innerHTML = rendered;
    });
  } else {
    return null;
  }
}