 let realNum_0;
 let realNum_1;
 let _result = 0;
 let isCleared = false;

 let hasSimbol = false;
 let numStr = "";
 let opSimbol = null;
 let operand1 = null;
 let operand2 = null;
 const nums = document.querySelectorAll(".nums");
 const actions = document.querySelectorAll(".actions");

 document.getElementById('reset').addEventListener('click', () => {
     operand1 = null;
     operand2 = null;
     numStr = '';
     document.getElementById("input").innerText = '0';
     document.getElementById("output").innerText = '';
 })

 for (let action of actions) {
     action.addEventListener('click', function(event) {
         operand1 ? operand2 = parseFloat(document.getElementById("input").innerText) || 0 : operand1 = parseFloat(document.getElementById("input").innerText);
         console.log(operand1, operand2);
         numStr = '';
         document.getElementById("input").innerText = '0';


         if (operand1) {

             if (opSimbol == null) {
                 opSimbol = this.getAttribute('data-value');
             }
             if (operand2) {

                 switch (opSimbol) {
                     case "/":
                         operand1 = operand1 / operand2;
                         operand2 = null;
                         break;
                     case "x":
                         operand1 = operand1 * operand2;
                         operand2 = null;
                         break;
                     case "-":
                         operand1 = operand1 - operand2;
                         operand2 = null;
                         break;
                     case "+":
                         operand1 = operand1 + operand2;
                         operand2 = null;
                         break;
                     case "_%":

                         break;
                     case "_+/-":
                         operand1 = operand1 * (-1);
                         break;
                     case "_C":
                         operand1 = null;
                         break;
                     case "=":
                         break;

                 }
                 opSimbol = this.getAttribute('data-value');
                 console.log("Hi dear");
                 document.getElementById("input").innerText = "";
                 document.getElementById("output").innerText = +numStr;
                 document.getElementById("input").innerText = operand1;
             }
             if (opSimbol === "_+/-") {
                 operand1 = operand1 * (-1);
                 console.log(operand1);
                 document.getElementById("input").innerText = operand1;
             }
         }
         hasSimbol = true;
     });
 }



 for (const button of nums) {

     button.addEventListener('click', function(event) {
         hasSimbol = false;
         let f = this.getAttribute('data-value')
         if (!isCleared) {
             document.getElementById("input").innerText = "";
             isCleared = true;
         }
         numStr += f;
         document.getElementById("input").innerText = numStr;
     })
     document.getElementById("output").innerText += numStr;
 }