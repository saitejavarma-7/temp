// this function is to make tabs active on click
function clicked(event){
    var elements= ['home', 'contact']
    console.log(event);
    for (var i=0; i<elements.length; i++){
      var elem= document.getElementById(elements[i]);
      if (elements[i]===event){
        elem.className+=" active";
      }
      else{
        elem.classList.remove("active");
      }
    }
}

// temporary
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }
