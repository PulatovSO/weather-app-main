let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let card = document.querySelector('.weather-card');
let windyClouds = document.querySelector('.clouds');
let icons = document.querySelectorAll('.icon');
let sun = document.querySelector('.sun');
let clouds = document.querySelector('.clouds');
let lightClouds = document.querySelector('.cloudy');
let darkClouds = document.querySelector('.dark-clouds');
let lightnings = document.querySelectorAll('.lightning-img');
let lightning1 = document.querySelector('.lightning1');
let lightning2 = document.querySelector('.lightning2');
let rainyCloud = document.querySelector('.rainy-cloud');
let snowflakes = document.querySelector('.snowflakes');
let plane = document.querySelector('.plane-wrap');
let form = document.querySelector('.input-form');
let search = document.querySelector('.search');
let searchBtn = document.querySelector('.search-btn');
let current = document.querySelector('.current');
let degree = document.querySelector('.digit');
let celcius = document.querySelector('.celcius');
let locate = document.querySelector('.location');
let desc = document.querySelector('.status');
let country = 'tashkent';

let sunnyTheme = false;


let clearIcon = './images/icons/clear.png';
let cloudIcon = './images/icons/cloud.png';
let sunIcon = './images/icons/sun.png';
let lightningIcon = './images/icons/lightning.png';
let rainIcon = './images/icons/rain.png';
let snowIcon = './images/icons/snow.png';
let mistIcon = './images/icons/mist.png';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  country = search.value;
  getDate();
})

getDate();

setTimeout(() => {
  getDate();
}, 5000)

function getDate() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=aaacdda7d03829ed9bb87a428aa81375`)
  .then(res => res.json())
  .then(data => {
    degree.innerHTML = Math.floor(data.main.temp) - 273;
    locate.innerHTML = `${data.name} | ${data.sys.country}`;
    desc.innerHTML = data.weather[0].description;
    // current.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    current.src = `${
      data.weather[0].description == 'clear' ? sunIcon :
      data.weather[0].description == 'clear sky' ? sunIcon :
      data.weather[0].description == 'sun' ? sunIcon :
      data.weather[0].description == 'sunny' ? sunIcon :
      data.weather[0].description == 'few clouds' ? cloudIcon :
      data.weather[0].description == 'overcast clouds' ? cloudIcon :
      data.weather[0].description == 'scattered clouds' ? cloudIcon :
      data.weather[0].description == 'broken clouds' ? cloudIcon :
      data.weather[0].description == 'rain' ? rainIcon :
      data.weather[0].description == 'rainy' ? rainIcon :
      data.weather[0].description == 'moderate rain' ? rainIcon :
      data.weather[0].description == 'light rain' ? rainIcon :
      data.weather[0].description == 'heavy rain' ? rainIcon :
      data.weather[0].description == 'snow' ? rainIcon :
      data.weather[0].description == 'snowy' ? rainIcon :
      data.weather[0].description == 'few snow' ? rainIcon :
      data.weather[0].description == 'heavy snow' ? rainIcon :
      data.weather[0].description == 'lightning' ? lightningIcon :
      data.weather[0].description == 'mist' ? mistIcon :
       cloudIcon
    }`;
  })
}

for (let icon of icons) {
  icon.addEventListener ('click', (e) => {
    if (icon.classList.contains('windy')) windy();
    else if (icon.classList.contains('sunny')) sunny(); 
    else if (icon.classList.contains('rainy')) rainy(); 
    else if (icon.classList.contains('lightning')) lightning(); 
    else if (icon.classList.contains('snow'))snowy();   
  })
}

function windy() {
  current.style.filter = 'contrast(200%)';
  plane.style.display = 'block';
  windyClouds.style.left = '0';
  windyClouds.style.display = 'block';
  body.style.backdropFilter = 'blur(100px) contrast(150%)';
  sun.classList.remove('sunDisplay');
  sunnyTheme = false;
  wrapper.classList.remove('lightningAnim');
  card.classList.remove('sunny-card');
  card.classList.remove('lightning-card');
  darkClouds.style.top = '-400px';
  lightClouds.style.bottom = '0';
  lightning1.classList.add('lightning-down');
  lightning2.classList.add('lightning-down');
  rainyCloud.style.display = 'none';
  snowflakes.style.display = 'none';
  sunnyThemeOn();
}

function sunny() {
  current.style.filter = 'contrast(200%)';
  plane.style.display = 'none';
  body.style.backdropFilter = 'blur(100px) sepia(50%) brightness(150%)';
  sun.classList.add('sunDisplay');
  sunnyTheme = true;
  wrapper.classList.remove('lightningAnim');
  card.classList.add('sunny-card');
  card.classList.remove('lightning-card');
  darkClouds.style.top = '-400px';
  lightClouds.style.bottom = '0';
  lightning1.classList.add('lightning-down');
  lightning2.classList.add('lightning-down');
  rainyCloud.style.display = 'none';
  snowflakes.style.display = 'none';
  cloudFlow();
  sunnyThemeOn();
}

function rainy() {
  current.style.filter = 'contrast(200%)';
  plane.style.display = 'none';
  body.classList.remove('sunnybg');
  body.style.backdropFilter = 'blur(100px)';
  sun.classList.remove('sunDisplay');
  sunnyTheme = false;
  wrapper.classList.remove('lightningAnim');
  card.classList.remove('sunny-card');
  card.classList.remove('lightning-card');
  lightClouds.style.bottom = '-400px';
  darkClouds.style.top = '0';
  lightning1.classList.add('lightning-down');
  lightning2.classList.add('lightning-down');
  snowflakes.style.display = 'none';
  rain();
  cloudFlow();
  sunnyThemeOn();
}

function lightning() {
  current.style.filter = 'contrast(100%)';
  plane.style.display = 'none';
  body.classList.remove('sunnybg');
  body.style.backdropFilter = 'blur(100px) brightness(20%)';
  sun.classList.remove('sunDisplay');
  sunnyTheme = false;
  wrapper.classList.add('lightningAnim');
  card.classList.remove('sunny-card');
  card.classList.add('lightning-card');
  lightClouds.style.bottom = '-400px';
  darkClouds.style.top = '0';
  lightning1.classList.remove('lightning-down');
  lightning1.style.animation = 'lightning 5s linear infinite 7s';
  lightning2.classList.remove('lightning-down');
  lightning2.style.animation = 'lightning 5s linear infinite 5s';
  rainyCloud.style.display = 'none';
  snowflakes.style.display = 'none';
  cloudFlow();
  sunnyThemeOn();
}

function snowy() {
  current.style.filter = 'contrast(200%)';;
  plane.style.display = 'none';
  body.classList.remove('sunnybg');
  body.style.backdropFilter = 'blur(100px) brightness(100%)';
  sun.classList.remove('sunDisplay');
  sunnyTheme = false;
  wrapper.classList.remove('lightningAnim');
  card.classList.remove('sunny-card');
  card.classList.remove('lightning-card');
  lightClouds.style.bottom = '-400px';
  darkClouds.style.top = '0';
  lightning1.classList.add('lightning-down');
  lightning2.classList.add('lightning-down');
  rainyCloud.style.display = 'none';
  snow();
  cloudFlow();
  sunnyThemeOn();
}

function snow() {
  snowflakes.style.display = 'block';
  setInterval(createSnowFlake, 20);
  function createSnowFlake() {
    let randomSize = Math.random() * 10;
    let snow_flake = document.createElement('div');
    snow_flake.classList.add('snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 5 + 2 + 's';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.width = randomSize + 'px';
    snow_flake.style.height = randomSize + 'px';
    snow_flake.style.zIndex = Math.random() + '100';
    snowflakes.appendChild(snow_flake);
    
    setTimeout(() => {
      snow_flake.remove();
    }, 5000)
  }
}

function rain() {
  rainyCloud.style.display = 'block';
  setInterval(createSnowFlake, 10);
  function createSnowFlake() {
    let drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = Math.random() * window.innerWidth + 'px';
    drop.style.animationDuration = Math.random() * 2 + 's';
    drop.style.opacity = Math.random();
    drop.style.height = Math.random() * 10 + 'px';
    drop.style.zIndex = Math.random() + '100';
    rainyCloud.appendChild(drop);
    
    setTimeout(() => {
      drop.remove();
    }, 5000)
  }
}

function cloudFlow() {
  windyClouds.style.left = '200%';
  setTimeout(() => {
    windyClouds.style.display = 'none';
  }, 3000)
}

function sunnyThemeOn () {
  if (sunnyTheme) {
    celcius.classList.add('sunnyDegree');
    locate.classList.add('sunnyDegree');
    desc.classList.add('sunnyStatus');
    search.classList.add('sunnyStatus');
    searchBtn.classList.add('sunnyStatus');
    search.classList.remove('colorBlue');
    searchBtn.classList.remove('colorBlue');
  } else {
    celcius.classList.remove('sunnyDegree');
    locate.classList.remove('sunnyDegree');
    desc.classList.remove('sunnyStatus');
    search.classList.remove('sunnyStatus');
    searchBtn.classList.remove('sunnyStatus');
    search.classList.add('colorBlue');
    searchBtn.classList.add('colorBlue');
  }
  console.log(sunnyTheme)
}

sunnyThemeOn()