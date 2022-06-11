// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function solution(inputArray) {
    let max = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length - 1; i++) {
        let test = inputArray[i] * inputArray[i + 1];
        if(test > max) max = test;
    }
    return max;
}
