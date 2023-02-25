
function download(){
    document.getElementById("download").style.display="inherit";
}
function navi(){
    if(document.getElementById("nav-item").style.height==="0%"){
        document.getElementById("nav-item").style.height="40%"
    }
    else{
        document.getElementById("nav-item").style.height="0%";
    }
}
function tabs(a){
   if(a=="video"){
    document.getElementById("audio").style.display="none";
    document.getElementById("video").style.display="flex";
   }
   else{
    document.getElementById("audio").style.display="flex";
    document.getElementById("video").style.display="none";
   }
}