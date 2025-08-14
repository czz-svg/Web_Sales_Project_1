const adressbtn = document.querySelector("#address_form");
const adressClosebtn = document.querySelector("#address_close");

// console.log(adressbtn);
adressbtn.addEventListener("click", function () {
  document.querySelector(".address_form").style.display = "flex";
});
adressClosebtn.addEventListener("click", function () {
  document.querySelector(".address_form").style.display = "none";
});



