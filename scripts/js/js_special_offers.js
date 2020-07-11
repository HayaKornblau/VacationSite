// JavaScript source code
'use strict';

// At Start - Get the 1st tab-element and click on it
$(document).ready(function () {
    document.getElementsByClassName("tablink")[0].click();
});

function openPage(pageName, elmnt, color) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
