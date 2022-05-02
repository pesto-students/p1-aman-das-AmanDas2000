const isVowel = (char) => {
    if ('aeiou'.includes(char)) return true;
    else return false;
}

const vowelCount = (string) => {
    const map = new Map();
    for (let char of string) {
        let lowChar = char.toLowerCase();
        if (isVowel(lowChar)) {
            if (map.has(lowChar)) {
                map.set(lowChar, map.get(lowChar)+1);
            } else {
                map.set(lowChar, 1);
            }
        }
    }
    return map
}

console.log(vowelCount('introduction'))