const button = document.getElementById("btn")
const name = document.getElementById("txt").value;



button.addEventListener('click',()=>{
    document.getElementById("disp").innerHTML="The existing usernames for" + " " + document.getElementById("txt").value + " " + "are as follows :-"
})