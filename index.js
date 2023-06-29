// ### ОСНОВЫ JS ###
// Задание 1: Нужно написать функцию, которая возвращает тип входного аргумента
// На входе: один аргумент, любого значения
// На выходе: строка, с типом входного аргумента

// function whatType(a){
//     return typeof(a);
// }


// Задание 2: Что выведется в консоль и почему?
// const a = () => console.log("a");
// const b = () => console.log("b");
// const c = a || b ? a() : b();
// console.log(c);
// Ответ: a undefined, потому что выполнится функция a(), 
// которая напечатает "a", но при этом так как функция ничего 
// не возвращает сама переменная c будет undefined



// ### Функции ###
// Задание 1: Нужно реализовать функцию, возвращающая сумму всех аргументов,
// если тип аргумента - число. Вызовов ВСЕГДА 5
// Пример: count(3)(2)(1)(5)(7) // 18
// count(3)(null)(1)('asad')() // 4

// function count(num) {
//     if (typeof num !== 'number') {
//         num = 0;
//     }
//     i = 0
//     function innerCount(nextNum) {
//         if (typeof nextNum === 'number') {
//             num += nextNum;
//         }        
//         if(++i === 4) return num;
//         return innerCount;
//     }
//     return innerCount;
// }
  


// ### Объекты и Массивы ###
// Задание 1: Реализовать функцию convertArrToObj, которая на вход принимает
// массив значений, а на выход отдает объект, где ключ - это индекс элемента в
// массиве, а значение - сам элемент
// Пример: const arr = [1, null, 'test', undefined]
// const obj = convertArrToObj()
// console.log(obj) // { 0: 1, 1: null, 2: 'test', 3: undefined }

// function convertArrToObj(arr){
//     let obj = new Object();
//     for(let i = 0; i < arr.length; i++){
//         obj[i] = arr[i];
//     }
//     return obj;
// }


// Задание 2: Требуется реализовать функцию countFromArr, которая позволяет
// подсчитать значения массива. На вход поступает массив, на выход получаем
// объект, где ключ - это элемент массива, а значение - его кол-во в массиве
// Пример: const arr = [1, 1, 1, 'test', 'test']
// const res = countFromArr(arr)
// console.log(res) // { 1: 3, test: 2 } 

// function countFromArr(arr){
//     let obj = new Object();
//     arr.forEach(element => {
//         if(obj.hasOwnProperty(element))
//             obj[element]++; 
//         else
//             obj[element] = 1;
//     });
//     return obj;
// }


// Задание 3: Требуется реализовать функцию groupByField, которая позволяет
// сгруппировать массив объектов по определенному полю этого объекта. 
// На вход поступает массив объектов и строка с названием нужного поля, на выход
// объект - где ключом является значение поля объекта, а значением - массив
// объектов где значение в поле равно этому ключу 🤪 (надеюсь в примере будет
// понятней)
// Пример: const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}]
// const res = groupByField(arr, 'test')
// console.log(res) // { 1: [{test: 1}, {test: 1}, {test: 1}], 2: [{test: 2}], 3: [{test: 3}]}

// function groupByField(arr, string){
//     let obj = new Object();
//     arr.forEach(element => {
//         if(obj.hasOwnProperty(element[string]))
//             obj[element[string]].push(element); 
//         else
//             obj[element[string]] = [element];
//     });
//     return obj;
//}



// ### Прототипы, наследование ###
// Задание 1: Реализовать функцию plus()
// Пример: (1).plus(2); // 3

// Number.prototype.plus = function(value) {
//     return this + value;
// };



// ### Асинхронная работа в JS ###
// Задание 1: Что выведется в консоль?
// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// new Promise((resolve, reject) => {
// console.log("promise constructor");
// reject();
// })
// .then(() => console.log("p1"))
// .catch(() => console.log("p2"))
// .catch(() => console.log("p3"))
// .then(() => console.log("p4"))
// .then(() => console.log("p5"));
// console.log("final")

// start
// promise constructor
// final
// p2
// p4
// p5
// timeout