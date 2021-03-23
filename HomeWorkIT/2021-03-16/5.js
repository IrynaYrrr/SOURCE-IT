// 5) Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. 
// Таким образом, тексты можно редактировать, искать и сохранять на компьютере. 
// Когда документы (особенно старые, написанные на пишущей машинке) оцифровываются, 
// программы распознавания символов часто делают ошибки. Ваша задача - исправить ошибки в оцифрованном тексте.
// Вам нужно только исправить следующие случаи: S-5, O-0, I-1, 
// correct('L0ND0N') => 'LONDON'
// correct('DUBL1N') => 'DUBLIN'
// correct('51NGAP0RE') => 'SINGAPORE'
// correct('BUDAPE5T') => 'BUDAPEST'
// correct('PAR15') => 'PARIS'



let correct = (str) => {
    let arr = str.split('');
    //console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '5') {
            arr[i] = 'S';
        }
        else if (arr[i] === '0') {
            arr[i] = 'O';
        }
        else if (arr[i] === '1') {
            arr[i] = 'I'
        }
    };
    return arr.join('');
};

console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('51NGAP0RE'));
console.log(correct('BUDAPE5T'));
console.log(correct('PAR15'));