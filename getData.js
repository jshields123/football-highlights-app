const api = 'https://www.scorebat.com/video-api/v1/'

        function getSportData(){
           return fetch(api).then(response => {
               const json = response.json()
               
               return json
           })
        }

        // below function currently filters json for Newcastle United games - need to include a search function for any club.
        function findTeam () {
            let userInput = document.getElementById("text1").value 
            console.log(userInput)
             getSportData().then(data => {
            const newArray = data.filter(element => element.title.includes(userInput))
            console.log(newArray[0]);
        })
    }

       
