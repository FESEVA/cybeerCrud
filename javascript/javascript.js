// function darkMode() {
//     var element = document.getElementById("content1-Login");
//     if (element.style.backgroundColor = "white") {
//         element.style.backgroundColor = "grey"
//     } else {
//         element.style.backgroundColor = "white"



//     }
// }



// 2 - Pantalla de Ingreso
// nav bar sideBar w3school
function w3_open() {
    var element = document.getElementById("content2-Pantalladeingreso").style.marginLeft;
    var element2 = document.getElementById("buttonAction").getAttribute("aria-expanded")
    var widthWindow = $(window).width();
    if (element2 == "false" && widthWindow > 830) {
        document.getElementById("content2-Pantalladeingreso").style.marginLeft = "325px";
        document.getElementById("content2-Pantalladeingreso").style.marginTop = "20px";
        document.getElementById("content2-Pantalladeingreso").style.transition = "1s";
    } else if (element2 == "false" && widthWindow < 830) {
        document.getElementById("content2-Pantalladeingreso").style.marginLeft = "42vw";
        document.getElementById("content2-Pantalladeingreso").style.marginTop = "20px";
        document.getElementById("content2-Pantalladeingreso").style.transition = "1s";
    } else {
        document.getElementById("content2-Pantalladeingreso").style.marginLeft = "20px";
        document.getElementById("content2-Pantalladeingreso").style.marginTop = "20px";
        document.getElementById("content2-Pantalladeingreso").style.transition = "2s";

    }
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

b() && ($("section.top").css("width", "150%"),
    $("footer").css("width", "150%"));