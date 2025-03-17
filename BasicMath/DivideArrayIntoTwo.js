function canBeDivided(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (const count of Object.values(freq)) {
        if (count % 2 !== 0) {
            return { isPossible: false, pairs: [] };
        }
    }

    const pairs = [];
    for (const num in freq) {
        const count = freq[num];
        for (let i = 0; i < count / 2; i++) {
            pairs.push([parseInt(num), parseInt(num)]);
        }
    }

    return { isPossible: true, pairs: pairs };
}

// Example usage:
const nums = [1, 2, 3, 4];
const result = canBeDivided(nums);
console.log(result.isPossible);  // Output: false
console.log(result.pairs);       // Output: []
