const wordSearch = (letters, word) => { 
    // Check horizontally
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    // Check vertically
    for (let i = 0; i < letters[0].length; i++) {
        const verticalJoin = letters.map(ls => ls[i]).join('');
        if (verticalJoin.includes(word)) return true;
    }

    // If the word is not found horizontally or vertically, return false
    return false;
};

module.exports = wordSearch;
