
"use strict";
function calcTip (bill){
  const resultat= bill >=50 && bill<=300 ? bill*0.15 : bill*0.2
  return resultat
}
console.log(calcTip(100))
const bills =[125,555,44]
console.log(bills)
const tipValue1=calcTip(bills[0])
const tipValue2=calcTip(bills[1])
const tipValue3=calcTip(bills[2])
const tips =[tipValue1,tipValue2,tipValue3]
console.log(tips)

const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(total)