


const calcAverage = (score1, score2, score3) => {
    const average= (score1 + score2 + score3)/3;
    return average ;
}

console.log(calcAverage(44,23,71));

console.log(calcAverage(65,54,49));

console.log(calcAverage(85,54,41));
console.log(calcAverage(23,34,27))




function checkWinner (avgDolphins,avgKoalas){
    if (avgDolphins >=  2 *  avgKoalas) {
    return `dolphins win (${avgDolphins} vs ${avgKoalas})` }
    else if (avgKoalas >= 2*avgDolphins){
    return  `koalas win (${avgKoalas} vs ${avgDolphins})`
    }
    else{
        return `no team wins`
    }
 
 
}

console.log(checkWinner(46,56))
console.log(checkWinner(60,28))