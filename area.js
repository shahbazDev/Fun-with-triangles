const a = document.querySelector("#base1");
const b = document.querySelector("#height1");
const calcBtn = document.querySelector("#calc-btn1");
const outputEl = document.querySelector("#output-area");


function calcArea(){

if(((Number(a.value)) <= 0 || ((Number(b.value))) <= 0)){
  outputEl.innerText = "Invalid input , number should be >0"
}
else{
var area = (1/2)*((Number(a.value)) *(Number(b.value)));
outputEl.innerText = `Area of Triangle is ${area}`;
}
}






 calcBtn.addEventListener("click",calcArea);

