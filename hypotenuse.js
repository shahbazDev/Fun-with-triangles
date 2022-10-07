const a = document.querySelector("#base");
const b = document.querySelector("#height");
const calcBtn = document.querySelector("#calc-btn");
const outputEl = document.querySelector("#outputel");


function calculateSumOfSquare(a,b) {
  const sumOfSquares = (a * a + b * b);
  return sumOfSquares;
}

function calcHypotenuse(){
  if(((Number(a.value)) <= 0 || ((Number(b.value))) <= 0)){
    outputEl.innerText = "Invalid input , number should be >0"
  }
  else{
    const sumOfSquares=calculateSumOfSquare(Number(a.value),Number(b.value))
    var c=Math.round(Math.sqrt(sumOfSquares));
    outputEl.innerText="the hypotenuse side is "+ c ;
  }





}
calcBtn.addEventListener("click",calcHypotenuse);

 