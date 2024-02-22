var typed = new Typed(".auto_name",{
    strings : ["Mohit Kumar","Programmer","Designer","Full Stack Deveplor"],
    typeSpeed : 105,
    backSpeed : 10,
    loop : true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    Event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-links");
}
