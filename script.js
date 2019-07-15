$(function() {
    $("#mainF").mouseover(function(e) {

        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left);

        if (relativeX < 10) {
            toggleSidebar();
        }

    });
});



window.onload = function() {
    document.getElementById("sect").style.opacity = "1";
    document.getElementById("pgr").style.opacity = "1";
    document.getElementById("sect").style.transform = "translate(-5px)";
    setColor();
}



function getColor(el) {

    var color = el.style.backgroundColor;

    //Local storage
    localStorage.setItem("color", color);
    setColor();

}


//Display data
function setColor() {
    //Inject data into html tags
    color = localStorage.getItem("color");
    if (color != null) {
        document.getElementById("sidebar").style.backgroundColor = color;
        document.getElementById("bar1").style.backgroundColor = color;
        document.getElementById("bar2").style.backgroundColor = color;
        document.getElementById("bar3").style.backgroundColor = color;
        document.getElementById("pgr").style.color = color;
        document.getElementById("dropbtn").style.backgroundColor = color;
    }


}



function toggleText(el) {
    var v = el.value;

    //Remove text to allow editing
    if (v == "Search..") {
        el.value = "";
        el.className = "active";

    } else {
        //Remove whitespace
        if (v.indexOf(" ") != -1) {
            split = v.split(" ").join("");
            v = split;
        }

        //Change to inactive state
        if (v == "") {
            el.value = "Search..";
            el.className = "inactive";

        }
    }
}