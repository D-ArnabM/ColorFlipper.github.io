const colors=["green","red","blue","black","white"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click", function(){
    const randomNumber=getrandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});
function getrandomNumber(){
    return Math.floor(Math.random()*colors.length);
};
