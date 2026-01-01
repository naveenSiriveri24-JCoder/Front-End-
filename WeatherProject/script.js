const checkWeather=async(name)=>{
    const apiId="e1586995d17cee0ee3c45e0f981817d7";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiId}`;
    const res=await fetch(apiUrl);
    const data = await res.json();
    console.log(data);

  
    
    document.querySelector("#city").innerHTML= "Selected Location: "+data.name;
    document.querySelector("#temp").innerHTML=data.main.temp +" °C";
    document.querySelector("#des").innerHTML=data.weather[0].description;
    document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
    document.querySelector("#wind").innerHTML=data.wind.speed+ " km/h";
}

document.querySelector(".inp button").addEventListener('click', ()=>{
    const location=document.querySelector(".inp input").value;
    checkWeather(location);
})
//checkWeather("Hyderabad");