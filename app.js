const inputs  = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox =document.querySelector("#output");


function calcSumOfAngles(angle1,angle2,angle3){
   sumOfAngles=angle1+angle2+angle3;
   return sumOfAngles;
}




function isTriangle(){
  const sumOfAngles = calcSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
  if(sumOfAngles==180){
    outputBox.innerText="Yay,you formed a triangle"
  }
  else{
    outputBox.innerText="nah,you dont form a triangle"
  }
}

// 



isTriangleBtn.addEventListener("click",isTriangle);

