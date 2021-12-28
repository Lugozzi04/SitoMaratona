let slideIndex = 1;
let upvote=0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  /*colore(n);*/
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length)
   {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  
  slides[slideIndex-1].style.display = "block";

}

function cambiaSfondo1(){
  document.getElementById("ad").style.backgroundImage = "url(g.jpg)";
  document.getElementById("x").style.display="none";
  document.getElementById("a").style.display="block";
  document.getElementById("vod").style.display="none";
  document.getElementById("perche").style.display="block";
  document.getElementById("inCom").style.display="block";

}
function cambiaSfondo2(){
  document.getElementById("ad").style.backgroundImage = "url(ad.jpg)";
  document.getElementById("x").style.display="block";
  document.getElementById("a").style.display="none";
  document.getElementById("vod").style.display="block";
  document.getElementById("perche").style.display="none";
  document.getElementById("inCom").style.display="none";


}

function inCom(){
  document.getElementById("ad").style.backgroundImage = "url(b4.jpg)";
  document.getElementById("x").style.display="none";
  document.getElementById("a").style.display="none";
  document.getElementById("vod").style.display="none";
  document.getElementById("perche").style.display="none";
  document.getElementById("inCom").style.display="none";
  document.getElementById("o1").style.display="block";
  document.getElementById("o2").style.display="block";
  document.getElementById("o3").style.display="block";
  document.getElementById("o4").style.display="block";
}

function perche(){
  document.getElementById("ad").style.backgroundImage = "url(b4.jpg)";
  document.getElementById("x").style.display="none";
  document.getElementById("a").style.display="none";
  document.getElementById("vod").style.display="none";
  document.getElementById("perche").style.display="none";
  document.getElementById("inCom").style.display="none";


}

function gr(){
  document.getElementById("ad").style.backgroundImage = "url(grazie.jpg)";
  document.getElementById("x").style.display="none";
  document.getElementById("a").style.display="none";
  document.getElementById("vod").style.display="none";
  document.getElementById("perche").style.display="none";
  document.getElementById("inCom").style.display="none";
  document.getElementById("o1").style.display="none";
  document.getElementById("o2").style.display="none";
  document.getElementById("o3").style.display="none";
  document.getElementById("o4").style.display="none";
}

function copia(testo) {
  let input = document.createElement('input');
  let area = document.getElementById(testo).value;
  input.setAttribute('value', area);
  document.body.appendChild(input);
  input.select();
  let risultato = document.execCommand('copy');
  document.body.removeChild(input);
  alert('Hai copiato il deck con successo');
  return risultato;
}

function clicco(){
  if(upvote%2==0){
    document.getElementById("SpanID").textContent="+7";
    upvote++;
    document.getElementById("up").style.backgroundImage = "url(pV.png)";

  }else{
  document.getElementById("SpanID").textContent="+6";
  upvote++;
  document.getElementById("up").style.backgroundImage = "url(upVote.png)";
  }
  

}

function reg(){


}




