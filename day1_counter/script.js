const numberDis = document.getElementById("numberDis");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;
decrease.onclick = function(){
    count--;
    numberDis.textContent = count;
}

increase.onclick = function(){
    count++;
    numberDis.textContent = count;
}
reset.onclick = function(){
    count=0;
    numberDis.textContent = count;
}