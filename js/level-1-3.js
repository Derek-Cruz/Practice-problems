// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function solution(inputString) {
  let all = /[A-Za-z0-9]/g;
  inputString = inputString.toLowerCase().replace(all, '');
  let newStr = inputString.length;

  for (let i = 0; i < newStr/2; i++) {
    if (inputString[i] !== inputString[newStr - 1 - i]) {
        return false;
    }
  }
  return true
}
