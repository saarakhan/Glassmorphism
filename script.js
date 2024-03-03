const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const direct = document.getElementsByClassName("btn-follow");

const follow = () => {
  window.open("https://www.linkedin.com/in/saarakhan001/")
};