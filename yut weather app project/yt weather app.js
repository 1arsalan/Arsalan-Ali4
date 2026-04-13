let apikey ="3698fc7a373cb4774813e9b69747aa9c";
let apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=jhang";

async function checkweather(){
    let response = await fetch(apiUrl + `&appid=${apikey}`);
    let data = await response.json();

    console.log(data);
}

checkweather();
