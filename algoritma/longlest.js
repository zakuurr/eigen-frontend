function findLongestWord(str) {
    let longestWord = "";
    let words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma';
let longest = findLongestWord(sentence);
console.log(longest + ' : ' + longest.length + ' character');
