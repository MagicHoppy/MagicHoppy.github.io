let najazd;
let linkiPamiec=JSON.parse(localStorage.getItem("links"));
let nazwyPamiec=JSON.parse(localStorage.getItem("names"));
let linkiPoZaladowaniu=document.querySelectorAll(".link");
if(nazwyPamiec!=null){
  for(let i=0;i<linkiPoZaladowaniu.length;i++){
    if(nazwyPamiec[i]=="undefined"){
      linkiPoZaladowaniu.innerHTML="";
    }
    else{
      linkiPoZaladowaniu[i].innerHTML=nazwyPamiec[i];
    }
    linkiPoZaladowaniu[i].href=linkiPamiec[i]; 
  }
}
let zadanka=[];
let counter=0;
/*function dodajZadanie(){
  let zadanieTresc=document.getElementById("trescZadania");
  if(zadanieTresc.value!=""){
    let lista=document.querySelector(".TODOlist");
    let zadanie=document.createElement("label");
    zadanka.push(zadanie);
    zadanie.setAttribute("id",zadanka.lastIndexOf(zadanie));
    zadanie.setAttribute("class","wszystkieZadania")
    console.log(zadanka);
    zadanie.setAttribute("onclick","usunZadanie(this.id)");//TODO correct that it will remove valid elements from list
    let br=document.createElement("br");
    let checkButton=document.createElement("input");
    checkButton.setAttribute("type","checkbox");
    zadanie.innerHTML=zadanieTresc.value;
    zadanie.appendChild(checkButton);
    zadanie.appendChild(br);
    lista.appendChild(zadanie);
    zadanieTresc.value="";
  }
}
function usunZadanie(id){
  let zadanie=document.getElementById(id);
  zadanie.remove();
  zadanka.splice(id,1);
}
*/

function startTime() {  
  var today;
  var h;
  var m;
  var s; 
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if(najazd==true){
    document.getElementById('clock').innerHTML= h + ":" + m + ":" + s;
  }
  else{
    document.getElementById('clock').innerHTML= h + ":" + m;
  }
  var t = setTimeout(startTime, 500);
}
function najechaneMyszka(){
  najazd=true;
}
function zjechaneMyszka(){
  najazd=false;
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
let czyEdycja;
function wlaczEdycje(){
  czyEdycja=true;
  let linki=document.querySelectorAll(".link")
  for(let i = 0; i < linki.length; i++){
    linki[i].style['pointer-events']="none";
    linki[i].style.cursor="none";
  }
  let tabela= document.querySelectorAll(".link");
  let przyciskEdycji=document.getElementById("edytuj");
  let przyciskZakonczeniaEdycji=document.getElementById("zakonczEdycje");
  przyciskZakonczeniaEdycji.style.display="inline";
  przyciskEdycji.style.display="none";  
  for(let i=0; i<tabela.length;i++){
    if(tabela[i].textContent==""){
      tabela[i].innerHTML="zakładka";
    }
  }
}
function wylaczEdycje(){
  czyEdycja=false;
  let linki=document.querySelectorAll(".link")
  for(let i = 0; i < linki.length; i++){
    linki[i].style['pointer-events']="auto";
    linki[i].style.cursor="pointer";
  }
  let tabela = document.querySelectorAll(".link");
  let przyciskEdycji=document.getElementById("edytuj");
  przyciskEdycji.style.display="inline";
  let przyciskZakonczeniaEdycji=document.getElementById("zakonczEdycje");
  przyciskZakonczeniaEdycji.style.display="none";
  for(let i=0; i<tabela.length;i++){
    if(tabela[i].textContent=="zakładka"){
      tabela[i].innerHTML="";
    }
  }
}
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
function openModal(komorka){
  if(czyEdycja==true){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let linki=document.querySelectorAll(".link");
    let przyciskZapisz=document.getElementById("zapisz");
    przyciskZapisz.onclick=function(){
      let inputLink=document.getElementById("url").value;
      let inputName=document.getElementById("nazwa").value;
      for(let i=0;i<linki.length;i++){
        if(i==komorka){
          linki[i].setAttribute('href', inputLink);
          linki[i].innerHTML=inputName;
          console.log(inputName);
        }
      }
    }
  }
}
function xButton(){
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.getElementById("url").value="";
  document.getElementById("nazwa").value="";
}
window.onclick = function(event){
  let modal = document.getElementById("myModal");
  if(event.target == modal){
    modal.style.display = "none";
    document.getElementById("url").value="";
    document.getElementById("nazwa").value="";
  }
}
window.onbeforeunload = function() {
  let linki=document.querySelectorAll(".link");
  console.log(linki);
  let hrefy=[];
  let nazwy=[];
  for(let i=0;i<linki.length;i++){
    if(linki[i].innerHTML==""){
      nazwy[i]="";
    }
    else{
      nazwy[i]=linki[i].innerHTML;
    }
    if(linki[i].href==""){
      hrefy[i]="index.html";
    }
    else{
      hrefy[i]=linki[i].href;
    }
  }
  window.localStorage.setItem("links", JSON.stringify(hrefy));
  window.localStorage.setItem("names", JSON.stringify(nazwy));
}