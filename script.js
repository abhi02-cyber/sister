document.getElementById("startBtn").onclick = function(){

window.location.href="pages/mission1.html";

}
const photos=[
"../assets/photos/photo1.jpg",
"../assets/photos/photo2.jpg",
"../assets/photos/photo3.jpg",
"../assets/photos/photo4.jpg",
"../assets/photos/photo5.jpg"
];

let photoIndex=0;

setInterval(function(){

photoIndex++;

if(photoIndex>=photos.length){
photoIndex=0;
}

document.getElementById("photo").src=photos[photoIndex];

},3000);
