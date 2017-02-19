/**
 * @param {string} word
 * @return {boolean}
 */

let str = "Google";

var detectCapitalUse = (word) => {
    let character;
    let length = word.length;
    let res = word.slice(1, length);
    let ans;

    character = word.charAt(0);
    if (character == character.toUpperCase()) {
        if (res == res.toUpperCase() || res == res.toLowerCase()){
            ans = true;
        }else ans = false;
    }
    if (character == character.toLowerCase()){
        if (res == res.toLowerCase()){
            ans = true;
        }else ans = false;
    }

    return ans;

};

console.log(detectCapitalUse(str));