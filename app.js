
numberButtons=document.querySelectorAll('[data-numbers]');
currentOperandText=document.querySelector('[data-current-operand]');
previousOperandText=document.querySelector('[data-previous-operand]');
allClearButton=document.querySelector('[data-all-clear]');

  
// //her bir numarayi yazdirma
numberButtons.forEach(function(number)  {
  number.addEventListener("click",buttons);
 
  
});
// console.log(buttons());
function buttons(){
  currentOperandText.innerHTML=this.value;
}




// //ardarda basilan numary yanyana yazdirma




// calc = function()
// {
//     var s = currentOperandText.innerHTML;
//     var arr = s.split("");

//     var result = 1;
//     for(var i=1,n=arr.length;i<n;++i) result *= parseInt(arr[i]);

//     currentOperandText.innerHTML = "{"+result+"}";
// }
// console.log(s);
// let number=[];
// while(true){
//   let enteredNumber=currentOperandText.innerHTML;
//   if(enteredNumber===isNaN){break;}
// number.push(number(enteredNumber));
//   console.log((number));
//   break;
// }














