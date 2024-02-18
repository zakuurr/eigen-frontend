function reverseStringWithNumberAtEnd(str) {
    let characters = str.match(/[a-zA-Z]+/g)[0];
    let number = str.match(/\d+/)[0];
    let reversedCharacters = characters.split('').reverse().join('');
    let result = reversedCharacters + number;
    return result;
}

let hasil = reverseStringWithNumberAtEnd("NEGIE1");
console.log(hasil);
