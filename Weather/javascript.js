const apikey = "7b4c48fe88169d392c3917f982f002db";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".container input");
const searchBtn = document.querySelector(".container button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl +city+`&appid=${apikey}`);
    let data = await  response.json();




document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp1").innerHTML=Math.round(data.main.temp) + '°C';
document.querySelector(".humidity").innerHTML=data.main.humidity + '%';
document.querySelector(".wind-speed").innerHTML=data.wind.speed + " Km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
}else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
}

// const backdroundColor = document.querySelector(".card");
const TempColour = Math.round(data.main.temp)
    if(TempColour > 20 ){
        document.querySelector(".card").style.background="linear-gradient(-190deg , rgb(250, 32, 32), rgba(234, 255, 5, 0.637),rgb(250, 32, 32,0.67))";
    }else if(TempColour < 5 ){
        document.querySelector(".card").style.background="linear-gradient(-190deg , rgb(2, 249, 245,0.4), rgb(52, 219, 191),rgb(2, 249, 245,0.8))";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})