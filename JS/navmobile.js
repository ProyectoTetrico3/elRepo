const hamburguer = document.querySelector('#header__hamburger');
const navAside = document.querySelector('.nav__aside');


hamburguer.addEventListener('click', ()=> {
    navAside.classList.toggle('nav__aside--display');
})

//const button = document.getElementsByClassName(".audio_pause");
//button.addEventListener("click", pauseMusic)


var musiquita = document.getElementById("backgroundMusic")

function pauseMusic() {
    console.log(musiquita.play);
    if(musiquita.paused){
        musiquita.play();
    } else {
    musiquita.pause()
    
  };}
  

 /* var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});*/

  

