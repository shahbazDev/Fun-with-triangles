const a = document.querySelector("#base1");
const b = document.querySelector("#height1");
const calcBtn = document.querySelector("#calc-btn1");
const outputEl = document.querySelector("#output-area");

function calculateBH(a,b) {
    const prod = (a * b);
    return prod;
  }

function calcArea(){
const bh=calculateBH(Number(a.value),Number(b.value))
var area = (1/2)*(bh);
outputEl.innerText = `Area of Triangle is ${area}`;

}
 calcBtn.addEventListener("click",calcArea);

