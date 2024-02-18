function hitungKemunculan(input, query) {
    let output = [];
    for (let i = 0; i < query.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (query[i] === input[j]) {
                count++;
            }
        }
        output.push(count);
    }
    return output;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = hitungKemunculan(INPUT, QUERY);
console.log(OUTPUT);
