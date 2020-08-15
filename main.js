

document.getElementById('btn').addEventListener('click',function(){

   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=d0ce6d1a6f83eb19c9be9eeb6b1afd62')
    .then(response=>response.json())
    .then(data=>{
        //console.log(data);
        const {name}=data;
        document.getElementById('cityName').innerHTML=name;
        var {temp} =data.main;
        temp = temp - 273.15;
        temp = Math.round(temp);
        document.getElementById('temperature').innerHTML=temp;
        const {main}= data.weather[0];
        document.getElementById('how-weather').innerHTML=main;
        

        document.getElementById('inputCity').value="";
    })

    .catch(err => alert('Wrong city name!'));
})