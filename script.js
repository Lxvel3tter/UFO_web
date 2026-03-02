document.body.style.overflow = 'hidden';

const explorarBtn = document.getElementById("explorarBtn");

explorarBtn.addEventListener("click", function () {
  document.body.style.overflow = 'auto';
  document.getElementById('cont').scrollIntoView({ behavior: 'smooth' });
});

const dineroBtn = document.getElementById("dineroBtn");
const img = document.getElementById("oculta");
const aud = document.getElementById("audio");

dineroBtn.addEventListener("click", function () {

  if (img.style.display === "none") {
    img.style.display = "block";
    aud.play();
  } else {
    img.style.display = "none";
    aud.pause();
  }

});


