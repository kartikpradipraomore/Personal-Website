let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabName){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    console.log(event.currentTarget); // Check the element
    console.log(event.currentTarget.classList); // Check the classes on the element
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add("active-tab")

};

 
bars.addEventListener("click", ()=> {
    document.getElementById("sidemenu").style.right = '-10px';
});

cross.addEventListener("click", ()=> {
    document.getElementById("sidemenu").style.right = '-210px';
});