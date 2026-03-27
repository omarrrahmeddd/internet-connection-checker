let tittle=document.querySelector(".tittle");
let ul=document.querySelector('ul');
let btn=document.getElementById("btn");

window.onload=()=>{
if(navigator.onLine){
    online();
}else{
    offline();  

}
}
window.addEventListener("online",function(){
    online();
})
window.addEventListener("offline",function(){
    offline();
})
btn.onclick=function(){
window.location.reload();
}

function online(){
tittle.innerHTML="you are online now";
tittle.style.color="green";
ul.classList.add("hide");
btn.classList.add("hide");

}
function offline(){
tittle.innerHTML="you are offline now !";
tittle.style.color="#666";
ul.classList.remove("hide");
btn.classList.remove("hide");

}
