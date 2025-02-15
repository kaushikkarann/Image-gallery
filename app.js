const suggestion = document.querySelector(".suggestion");
const imgCon = document.querySelector(".result");
const API_KEY = "MzbR2hxFLKDj8LQ8So21rHfrMmAW0SsMRXM1SVd7RhtUeHNGyd54RT8W";
const search = document.querySelector("input");
const btn = document.querySelector("button");
const url = "https://api.pexels.com/v1/search?query=";

btn.addEventListener("click", () => {
    const query = search.value.trim();
    if (query) {
        Imgdis(url + query);
    }
});

suggestion.addEventListener("click", (e) => {
    const suggest = e.target.innerText;
    search.value = suggest;
    Imgdis(url + suggest);
});

async function Imgdis(url) {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error status ${response.status}`);
        }

        const data = await response.json();
        displayImages(data.photos);
    } catch (error) {
        console.error(error);
    }
}

function displayImages(photos) {
    imgCon.innerHTML = ""; // Clear previous results
    imgCon.style.display = "block";

    photos.forEach(photo => {
        const div = document.createElement("div");
        div.classList.add("img-con");

        const img = document.createElement("img");
        img.classList.add("img-res");
        img.src = photo.src.original;

        const p = document.createElement("p");
        p.classList.add("clickby");
        p.innerText = photo.photographer;

        div.appendChild(img);
        div.appendChild(p);
        imgCon.appendChild(div);
    });
}
 

     


 function createcontainer(){
    let img=document.createElement("img");
    img.classList.add("img-res");
 }

