// 3) Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. 
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.
// Если такого элемента нет - ничего не выводите. 

let arrFour = [];

for (let i = 1; i < 25; i++) {
    arrFour.push(i);
};

for (let key of arrFour) {
    if (key === 5) {
        console.log('Есть');
        break;
    };
};