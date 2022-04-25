
function woodCalculator(wood){
    var chairwoody = 4 * wood;
    var tablewoody = 6 * wood;
    var totalwoody =  chairwoody + tablewoody;
    return totalwoody;

}
console.log(woodCalculator(2,3))

// another way//
function woodCalculatorr(chair,table,bed){
    var chairwood = 4 * chair;
    var tablewood = 6 * table;
    var bedwood = 8 * bed;
    var totalwood =  chairwood + tablewood + bedwood;
    return totalwood;

}
console.log(woodCalculatorr(2,1,1))