const api = "https://www.scorebat.com/video-api/v1/";

function getSportData() {
  return fetch(api).then((response) => {
    const json = response.json();

    return json;
  });
}

