var link = document.getElementById('link');
var btn = document.getElementById('btn');



btn.addEventListener('click', () => {
    var urlShorten = link.value;

    fetch("https://capsulink.p.rapidapi.com/capsulate", {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "capsulink.p.rapidapi.com",
                "x-rapidapi-key": "d82821146dmsh0ea8a649aa47896p17a7fbjsn4c87553327e7",
                "api-key": "<Some API key>",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": {
                "url": "https://github.com/alabo-excel?tab=repositories"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
})