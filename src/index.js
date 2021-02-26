module.exports = function reverse (n) {
    let numberString = ''+ n;
    let digitsArray = numberString.split('');
    let reverseArray = [];
    digitsArray.forEach(function(element){
      reverseArray.unshift(element);
    });
    const reverseValue = reverseArray.join(''); 
    const reverseNumber = parseInt(reverseValue, 10);
    return reverseNumber;
}
