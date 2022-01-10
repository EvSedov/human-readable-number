module.exports = function toReadable(number) {
  if (!number) {
    return 'zero';
  }
  const numbersInWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozensInWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const supplements = ['', '', 'hundred', 'thousand'];
  const numberInString = number.toString();
  const setOfNumbers = numberInString.split('').map((element) => parseInt(element));
  const reverseSetOfNumbers = setOfNumbers.reverse();
  const getNumberInWord = (num, idx) => {
    if (idx === 0) {
      return (reverseSetOfNumbers[1] === 1) ? numbersInWords[10 + num] : numbersInWords[num];
    } else if (idx === 1) {
      return dozensInWords[num];
    } else {
      return numbersInWords[num] + ' ' + supplements[idx];
    }
  };
  const result = reverseSetOfNumbers.map((number, index) => getNumberInWord(number, index)).reverse();
  return result.filter((el) => el !== '').join(' ');
};
