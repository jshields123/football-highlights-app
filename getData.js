const api = 'https://www.scorebat.com/video-api/v1/'

        function getSportData(){
           return fetch(api).then(response => {
               const json = response.json()
               
               return json
           })
        }

        // below function currently filters json for user inputted team games.
        // need to add this as an option for the games to be rendered.
        function findTeam () {
            let userInput = document.getElementById("text1").value 
            console.log(userInput)
             getSportData().then(data => {
            const newArray = data.filter(element => element.title.includes(userInput))
            let result = newArray[0]
            return result
        })
    }

       
