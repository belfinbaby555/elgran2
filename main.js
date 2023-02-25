
function download(){
    document.getElementById("download").style.display="inherit";
}
function navi(){
    var navi=document.getElementById("nav-item");
    if(navi.style.height==="0%"){
        navi.style.height="40%"
    }
    else{
       navi.style.height="0%";
    }
}

function tabs(evt,tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("videoandaudio");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("button2");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor="transparent";
      tablinks[i].style.color="grey";
    }
  
    document.getElementById(tabName).style.display = "block";
    tablinks[evt].style.backgroundColor="rgb(255, 60, 0)";
    tablinks[evt].style.color="white";
  } 