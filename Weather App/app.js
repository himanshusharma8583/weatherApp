const form = document.querySelector("form");
const btn = document.querySelector("button");

const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temperature = document.querySelector(".temperature");
const minmax = document.querySelector(".minmax");
const visibility = document.querySelector(".visibility");
const description = document.querySelector(".description");

const baseUrl = "https://api.openweathermap.org";

async function getWeather(searchText){
    try{
    const res = await axios.get(`${baseUrl}/data/2.5/weather?q=${searchText}&units=metric&appid=690d31e8728d30182590310e00088400`);
    const data = res.data;
    console.log(data);

    let dateString = new Date().toUTCString();
        
        city.innerText = `${searchText.toUpperCase()}, ${data.sys.country}`;
        date.innerText = dateString.slice(0,16);
        temperature.innerText = `${data.main.temp}°C`;
        minmax.innerText = `${data.main.temp_max}°C (Max) / ${data.main.temp_min}°C (Min)`;
        visibility.innerText = `${data.visibility/1000}Kms`;
        description.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
// console.log(description.innerText);
        switch(data.weather[0].description){
          
            case 'mist':
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
            break;
            case 'clear sky':
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1526943604017-955071a1fb3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bm55JTIwZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
                document.body.style.backgroundPosition="center top";
            break;
            case 'overcast clouds':
                document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/panorama-of-beautiful-thunder-clouds-grey-overcast-dramatic-sky-picture-id1053913764?b=1&k=20&m=1053913764&s=170667a&w=0&h=2Y4FxRqL59CIEzZj_QQGfh_9fVDHQ7jWabKWMBfJ_ns=')";
            break;
             case 'scattered clouds':
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1646069816777-7e8a69b0596f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNjYXR0ZXJlZCUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
            break;
            case 'few clouds':
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1466527496777-6ed64c30572e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZldyUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
            break;
            case 'broken clouds':
                document.body.style.backgroundImage = "url('https://images.freeimages.com/images/large-previews/e83/broken-clouds-1537880.jpg')";
            break;
            case 'light rain':
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516389207633-e5784a9518d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpZ2h0JTIwcmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
            break;
        case 'moderate rain':
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJhdGUlMjByYWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
            break;
       case 'heavy intensity rain':
                document.body.style.backgroundImage = "url('https://www.thoughtco.com/thmb/xHhwJLVYqSosdzMaOGiocqcqrxs=/1258x839/filters:fill(auto,1)/GettyImages-591910329-56f6b5243df78c78418c3124.jpg')";
            break; 
        }
}
catch(err){
    swal("Oops..! Try Again","Something Went Wrong", "error");
   console.log("Something Went Wrong"); 
   console.log(err);
}

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = form.elements[0].value.trim();
    getWeather(searchText);
    form.elements[0].value = "";
})