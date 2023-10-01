function groupAnagrams(words) {
    const anagramGroups = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');

        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [word];
        } else {
            anagramGroups[sortedWord].push(word);
        }
    }

    return Object.values(anagramGroups);
}

const result = groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
console.log(result);
