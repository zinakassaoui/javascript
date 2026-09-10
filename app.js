
"use strict";


function calcTip (bill){
  const resultat= bill >=50 && bill<=300 ? bill*0.15 : bill*0.2
  return resultat
}
console.log(calcTip(100))
const bills =[22,295,176,440,37,105,10,1100,86,52]
const tips=[]
const total =[]

for (let i=0 ; i<bills.length ; i++){
  tips[i]= calcTip(bills[i])
  total[i]=tips[i]+bills[i]
  
}
console.log(tips,total)

function calcAverage (arr){
 let sum=0
    for (let i=0 ;i<arr.length;i++) {
    sum +=arr[i];
    }
  let average =sum  / arr.length ;
 return average
}
const arr=[1,2,3,4,5,6,7,8,9]  


console.log(calcAverage(arr))