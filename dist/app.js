var cityName=document.getElementById('city-name-col');
var date=document.getElementById('date-col');
var temp=document.getElementById('temp');
var humidity=document.getElementById('humidity');
var windSpeed=document.getElementById('wind-speed');
var sunrise=document.getElementById('sunrise');
var sunset=document.getElementById('sunset');
var result=document.getElementById('result');


const displayCityName =(city)=>{
    cityName.innerText=city.toLowerCase();
}

const displayDate = () =>{

}
const find= (city) =>{
    console.log(city)
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
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     $('#temp').html(result.temp+' <sup>o</sup>C');
    //     $('#humidity').text(result.humidity);
    //     $('#wind-speed').text(result.wind_speed+' kmph');
    //     console.log(result);
    // } catch (error) {
    // //     console.log(error.val);
    //         // alert(error)
    //         alert('how are you ')

    // // }
    // $('#temp').html(result.temp+' <sup>o</sup>C');
    // $('#humidity').text(result.humidity);
    // $('#wind-speed').text(result.wind_speed+' kmph');
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
                displayDate();
                console.log(result);
                $('#temp').html(result.temp+' <sup>o</sup>C');
                $('#humidity').text(result.humidity+' %');
                $('#wind-speed').text(result.wind_speed+' kmph');
                date.innerHTML=new Date(result.sunrise * 1000).toLocaleDateString().replaceAll('/','-');
                sunrise.innerHTML='Sunrise &nbsp;'+ new Date(result.sunrise * 1000).toLocaleTimeString().toUpperCase();
                sunset.innerHTML='Sunset &nbsp;'+ new Date(result.sunset * 1000).toLocaleTimeString().toUpperCase();

            })
            .catch(e=>console.log(e))
        }
    }).catch(error=>alert('Enter valid city Name'))

 }

var findbtn=document.getElementById('findbtn')
// $(findbtn).click(()=>{
//     console.log('hi there')
// });
findbtn.addEventListener("click",(e)=>{
    e.preventDefault()
        find($('#search').val())
        // console.log(search.value)
})
console.log(findbtn)
find('Globe')
