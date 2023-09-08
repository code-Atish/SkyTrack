var cityName=document.getElementById('city-name-col');
var date=document.getElementById('date-col');
var temp=document.getElementById('temp');
var humidity=document.getElementById('humidity');
var windSpeed=document.getElementById('wind-speed');
var sunrise=document.getElementById('sunrise');
var sunset=document.getElementById('sunset');
var result=document.getElementById('result');
var findbtn=document.getElementById('findbtn');
var search =document.getElementById('search');

const displayCityName =(city)=>{
    cityName.innerText=city.toLowerCase();
}

const find= (city) =>{
    result.classList.toggle('invisible');
    document.querySelector('.loader').classList.toggle('hidden');
   let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7328c0991msheddb30bc238b509p1afa26jsn70192e36220b',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    findbtn.disabled=true;
    fetch(url,options)
    .then((Response)=>{
        result.classList.toggle('invisible');
        document.querySelector('.loader').classList.toggle('hidden');
        findbtn.disabled=false;
        if(Response.status===400){findbtn.disabled=false; alert("Enter valid city name "); }
        else {
        Response.json()
            .then((result)=>{
                displayCityName(city);
                temp.innerHTML=result.temp+' <sup>o</sup>C';
                humidity.innerHTML=result.humidity+' %';
                windSpeed.innerHTML=result.wind_speed+' kmph';
                date.innerHTML=new Date(result.sunrise * 1000).toLocaleDateString().replaceAll('/','-');
            
            })
            .catch(e=>console.log(e))
        }
    }).catch(error=>alert('Enter valid city Name'))

 }

findbtn.addEventListener("click",(e)=>{
    e.preventDefault()
        find(search.value)
})

find('Globe')
