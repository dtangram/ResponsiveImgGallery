const request = new XMLHttpRequest();
const searchField = document.querySelector("header > form > div input");
const magnifyGlass = document.querySelector("header > form > div img");
const globe = document.getElementById("globe");
const animate = "animate";

globe.classList.add(animate);

request.onload = function(){
  if(request.status >= 200 && request.status < 400){
        const jsonObj = JSON.parse(request.responseText);

        let locationInfoString = "";

        for(let i = 0; i < jsonObj.results.length; i++){
          locationInfoString += "<article>";
          locationInfoString += "<img src='" + jsonObj.results[i].urls.raw + "' srcset='" + jsonObj.results[i].urls.small + "?text=300px 300w, " + jsonObj.results[i].urls.regular + "?text=600px 600w," + jsonObj.results[i].urls.full + "?text=800px 800w' sizes='(max-width: 300px) 100vw, (max-width: 600px) 33vw' alt='Travel Image'>";
          locationInfoString += "<div>";
          locationInfoString += "<p>";
          locationInfoString += "<img src='img/user-icon.svg'>";
          locationInfoString += jsonObj.results[i].user.name;
          locationInfoString += "</p>";
          locationInfoString += "<p>";
          locationInfoString += "<img src='img/heart.svg'>";
          locationInfoString += jsonObj.results[i].user.total_likes;
          locationInfoString += "</p>";
          locationInfoString += "</div>";
          locationInfoString += "</article>";
        }

        const contentLocationInfo = document.querySelector("section");
        contentLocationInfo.innerHTML = locationInfoString;

        console.log(jsonObj);
      }
};

request.onerror = function(){
  console.log("connection error");
};

const url = "https://api.unsplash.com/search/photos?client_id=b6f62152b46440d63baf3ea94bb4f2931883da0f94b518c5723c14a78a8badb1&page=1&per_page=9&query=travel";
request.open("GET", url, true);
request.send(null);



const headerLogo = document.querySelector("header h1");

const globeBounce = "globeBounce";

headerLogo.onmouseover = function(){
  globe.classList.remove(animate);
  globe.classList.add(globeBounce);
}
