
function prikaziPitanje(x, y){
      if(y.style.display == "none" || y.style.display == ""){
            y.style.display = "block";
            x.style.fontWeight = "700";
            x.style.color = "black";
            y.style.color = "grey";
      }
      
      else if (y.style.display == "block"){
            y.style.display = "none";
            x.style.fontWeight = "400";
            x.style.color = "grey";
      }
      else{
            console.log("greska");
      }
}


      