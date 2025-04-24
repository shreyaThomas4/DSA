// Input: s = "egg", t = "add"
// Output: true

// var isIsomorphic = function(s, t) {
//     let mapS = new Map();
//     let mapT = new Map();

//     for(i=0; i< s.length; i++) {
//         let letterInS = s[i];
//           let letterInT = t[i];

//         if (mapS.has(letterInS) && mapS.get(letterInS) !== letterInT) {
//           return false;
//         }

//         if (mapT.has(letterInT) && mapT.get(letterInT) !== letterInS) {
//           return false;
//         }

//         mapS.set(letterInS, letterInT);
//         mapT.set(letterInT, letterInS);
//     }
//     return true;
// };

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapST[charS] && mapST[charS] !== charT) ||
            (mapTS[charT] && mapTS[charT] !== charS)) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true