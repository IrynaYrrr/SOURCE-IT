// 4) Создайте объект cat, name:'Stepan' и в этом объекте создайте метод voice, 
// который при вызове себя у объекта cat будет выводить сообщение в консоль 'привет, меня зовут Stepan'.

let cat = {
    name: 'Stepan',
    voice: function () {
        console.log(`привет, меня зовут ${this.name}`);
    }
};
cat.voice();