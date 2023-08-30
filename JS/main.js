function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


const mySidebar = document.getElementById('mySidebar');
const openbtn = document.getElementById('openbtn');
const closebtn = document.getElementById('closebtn');



if (window.matchMedia("(max-width: 999px)").matches) {
mySidebar.onclick = function(){
    closeNav(); 
  }
}


openbtn.onclick = function(){
  openNav(); 
}


closebtn.onclick = function(){
  closeNav(); 
}

