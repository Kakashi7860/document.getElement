const heading = document.getElementById("title");
const button = document.getElementById("btn");

let clicked = false;
button.addEventListener("click",()=>{
    if(!clicked){
        heading.textContent = "you clicked the button";
        heading.style.color = "blue";
        clicked = true;
    }else{
        heading.textContent="you clicked the button";
        heading.style.color = "green";
        clicked = false;
    }
});


