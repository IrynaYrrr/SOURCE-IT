// 2) Дан массив с числами. Найдите среднее арифметическое его элементов 

let arrThree = [];

for (let i = 1; i < 10; i++) {
    arrThree.push(i);
};

let result = 0;
for (let a of arrThree) {
    result += a;
}
result /= arrThree.length;

console.log(result);
