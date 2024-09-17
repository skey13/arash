alert("hello");
const hambergerwraper = document.querySelector(".hamberger-wraper");
hambergerwraper.addEventListener('click', () => {
  hambergerwraper.classList.toggle('active');
})