
module.exports = {
  capitalizeFirst: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  isPalindrome: (str) => str === str.split('').reverse().join(''),
  isPrime: (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
};