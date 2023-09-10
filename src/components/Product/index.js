
function loadImg() {
    let background = document.querySelector('.flex-container');
    let currentTemp = data.main.temp;
}

let winter = currentTemp <= 4;
let earlyWinter = currentTemp >= 5 && currentTemp < 9;
let beginWinter = currentTemp >= 9 && currentTemp < 12;
let fall = currentTemp >= 12 && currentTemp < 17;
let earlyFall = currentTemp >= 17 && currentTemp <20;
let earlySummer = currentTemp >= 20 && currentTemp <23;
let beginSummer = currentTemp >= 23 && currentTemp < 28;
let summer = currentTemp >= 28;

if(winter) {
    background.style.backgroundImage = "url('./)";
} else if(earlyWinter) {
    background.style.backgroundImage = "url('./)";
} else if(beginWinter) {
    background.style.backgroundImage = "url('./)";
}else if(fall) {
    background.style.backgroundImage = "url('./)";
}else if(earlyFall) {
    background.style.backgroundImage = "url('./)";
}else if(earlySummer) {
    background.style.backgroundImage = "url('./)";
}else if(beginSummer) {
    background.style.backgroundImage = "url('./)";
}else if(summer) {
    background.style.backgroundImage = "url('./)";
}
