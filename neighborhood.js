const restaurants =["https://www.zanatas.com/", "https://gloriascuisine.com/", "https://bin303.com/", "http://www.joewillys.com/",
"https://www.charliesbst.com/", "http://www.theoarhouserestaurant.com/", "https://www.sameespizzagetti.com/",
"https://firesidechickenandtacos.com/", "https://snuffers.com/", "https://www.thestandardservice.com/"]




document.querySelector("#rest-btn").addEventListener("click", getRandom);

function getRandom(){
    let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    document.querySelector(".restaurant-suggestion").innerHTML = `
        <a href="${randomRestaurant}"style="font-size:30px">${randomRestaurant}</a>
    `;
}