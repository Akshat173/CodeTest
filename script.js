let cardcontainer = document.getElementById("cardContainer")
let ihtml = "";
let arr = [
    "/CodeTest/images/heading_images/01_one.jpg",
    "/CodeTest/images/heading_images/02_two.jpg",
    "/CodeTest/images/heading_images/03_three.jpg",
    "/CodeTest/images/heading_images/04_four.jpg",
    "/CodeTest/images/heading_images/05_five.jpg",
    "/CodeTest/images/heading_images/06_six.jpg",
    "/CodeTest/images/heading_images/07_seven.jpg",
    "/CodeTest/images/heading_images/08_eight.jpg",
    "/CodeTest/images/heading_images/09_nine.jpg",
    "/CodeTest/images/heading_images/10_ten.jpg",
    "/CodeTest/images/heading_images/11_eleven.jpg",
    "/CodeTest/images/heading_images/12_twelve.jpg",
]


// Fetching data from the link and adding cards to the container 
let link = "https://kontests.net/api/v1/all";
let p = fetch(link)
p.then((response)=>{
    return response.json()
}).then((list)=>{
    for(value in list){
        ihtml += `
        <div class="card-body">
            <span class="contestTitle">
                <img src="${arr[Math.round(Math.random()*11)]}" class="card-img-top">
                <h5 class="card-title">${list[value].name}</h5>
            </span>
            <hr>
            <div class = "contestInfo">
                <p class="card-text mb-3">Date: ${(list[value].start_time).slice(0, 10)}</p>
                <p class="card-text mb-3">Starts at: ${(list[value].start_time).slice(11, 19)} UTC</p>
                <p class="card-text mb-3">Ends at: ${(list[value].end_time).slice(11, 19)} UTC</p>
                <p class="card-text mb-3">Site: ${list[value].site}</p>
                <p class="card-text mb-3">Duration: ${Math.round(list[value].duration)} seconds</p>
                <p class="mb-5"><a href="${list[value].url}" class="btn btn-customize" target="_blank">Visit here</a></p>
            </div>
        </div>
        ` 
    }
    cardcontainer.innerHTML += ihtml 
})