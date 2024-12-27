
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
const apikey='cff88eadfc6eb2342fd68adfaa22ee87'
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function check(city){
    const response=await fetch(url + city + `&appid=${apikey}`);

    if(response.status==404)
        {
            document.querySelector(".error").style.display="block"
            document.querySelector(".weather").style.display="none"
        }
        else
        {
            var data=await response.json();
    console.log(data)    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="./img/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="./img/clear.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="./img/rain.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src="./img/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="./img/mist.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"

        }
    
}
searchbtn.addEventListener("click",()=>{
    check(searchbox.value);
})
