
// 1)Дан массив с числами.
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// Вариант 1:

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let a of arr) {
    if (a > 0 && a < 10) {
        console.log(a);
    }
};

// Вариант 2:

let arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

arrTwo.forEach(item => {
    if (item > 0 && item < 10) {
        console.log(item);
    }
});