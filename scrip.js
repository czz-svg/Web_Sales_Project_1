const adressbtn = document.querySelector("#address_form");
const adressClosebtn = document.querySelector("#address_close");
const rightbtn = document.querySelector(".fa-chevron-right");
const lefttbtn = document.querySelector(".fa-chevron-left");
const imgNumer = document.querySelectorAll(".slider_content_left_top img");
let index = 0;

// console.log(adressbtn);
adressbtn.addEventListener("click", function () {
  document.querySelector(".address_form").style.display = "flex";
});
adressClosebtn.addEventListener("click", function () {
  document.querySelector(".address_form").style.display = "none";
});
// slider-------------------
rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumer.length - 1) {
    index = 0;
  }
  document.querySelector(".slider_content_left_top").style.right =
    index * 100 + "%";
  // console.log(index)
});
lefttbtn.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = imgNumer.length - 1;
  }
  document.querySelector(".slider_content_left_top").style.right =
    index * 100 + "%";
  // console.log(index)
});
// console.log(index)
//---------------bottom---------------------------------------------------------

const imgNumerLi = document.querySelectorAll(".slider_content_left_bottom li");
imgNumerLi.forEach(function (image, index) {
  image.addEventListener("click", function () {
    removeClassActive()
    document.querySelector(".slider_content_left_top").style.right =
      index * 100 + "%";
    image.classList.add("active");
  });
});
function removeClassActive() {
  let imgActive = document.querySelector(".active");
  imgActive.classList.remove("active");
}
//--------------- slider auto active---------------------------------------------------------
function imgAutoActive(){
  index++
  if (index>imgNumer.length-1) {
    index=0
  }
  console.log(index)
  document.querySelector(".slider_content_left_top").style.right =
      index * 100 + "%";
}
setInterval(imgAutoActive,3000)

