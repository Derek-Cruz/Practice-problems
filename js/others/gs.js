// function Oddnumbers(l, r) {

// }

// function Sortarr(arr, k) {

// }

function g(s) {
    let curr = 1;
    let prev = 0;
    let ans = 0;
    for (let i = 1; i < s.lenght; i++) {
        if(s[i] === s[i-1]) {
            curr++
        } else {
            ans += Math.min(curr, prev);
            prev = curr;
            curr = 1;
        }
        return ans + Math.min(curr,prev);
    };
}