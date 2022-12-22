
// переменные

// const x = 1;
// console.log('x: ', x);
// let y = 2;
// console.log('y: ', y);
// y = 3;
// console.log('y2: ', y);
// x = 4;
// console.log('x2: ', x);
// let z = 1.3;
// let f1 = 4;
// // let f2 = 5;
// let x = 3;
// let y = 2;

// y = x;

// y = 4;

// const a = 2;





// console.log('b: ', b);
// console.log('a: ', a);
// console.log('x: ', x);
// console.log('y: ', y);

// let b = prompt("температура по F")

// function f1(tF) {
//     let number = Number(tF)
//     // console.log('number: ', number);
//     // console.log('number type: ', typeof (number));
//     if (number >= 0) {
//         let tc = (tF - 32) * 5 / 9;
//         console.log("температура в C ", tc)
//         return;
//     } else if (number < 0) {
//         let tc = (tF - 32) * 5 / 9;
//         console.log("температура в C ", tc)
//         return;
//     } else if (number === null) {
//         console.log("вы ввели не число")
//         return
//     }

//     else {
//         console.log("вы ввели не число")
//         return
//     }
// }

// f1(b)
// console.log('tC(): ', f1(b));
// let f2 = function () {
//     console.log('f2');
// }

// let f3 = () => {
//     console.log('f3');
// }

// f2()

// f3()

// let z1 = "1.3";
// let z2 = '1.3';
// let z3 = `1.3 ${f1 + f2}`;

// let z3 = true;
// let z4 = false;

// let z3 = null;

//операторы

// z3 = -z3;
// let z3 = 7 ** 2;

//преобразование типов

// let z3 = 37 + '2';

//сравнения операторы

// let z3 = 37 >= 2;

// условные операторы

// let z3 = null;

// if (z3 >= 7) {


//логические операторы

// if (z3 || z3 === null) {
//     console.log('больше');
// } else {
//     console.log(' меньше');
// }

// function f1(x, y) {
//     let c = x > y;
//     return c
// }


// console.log('f1 - ', f1(3,2));
// console.log('type - ', typeof(f1));

//задача 1

// TC = (TF – 32)·5 / 9.


// let temp = 255;

// function tfToTc(tDefault) {
//     let t = tDefault;
//     let tc = (t - 32) * 5 / 9;
//     return tc;
// }

// console.log('в градусах цельсия - ', tfToTc(temp));

//задача №3
// let array = [325, 12, 88, 9]
// array.push(55)

// function numbersToWords(x) {
//     let inputNumber = x
//     let str = ""
//     let strDec = ""
//     let strUnit = ""
//     let strTwo = ""
//     let strTwoUnit = ""
//     if (inputNumber > 99) {
//         let res = inputNumber / 100
//         // console.log("количество сотен ", res)
//         if (res >= 1) {
//             str = str + "сто "
//             if (res >= 2) {
//                 str = "двести "
//             }
//             if (res >= 3) {
//                 str = "триста "
//             }
//             if (res >= 4) {
//                 str = "четыреста "
//             }
//             if (res >= 5) {
//                 str = "пятьсот "
//             }
//             if (res >= 6) {
//                 str = "шестьсот "
//             }
//             if (res >= 7) {
//                 str = "семьсот "
//             }
//             if (res >= 8) {
//                 str = "восемьсот "
//             }
//             if (res >= 9) {
//                 str = "девятьсот "
//             }
//         }

//         let resDec = inputNumber % 100
//         if (resDec >= 10) {
//             strDec = "десять "

//             if (resDec >= 20) {
//                 strDec = "двадцать "
//             }
//             if (resDec >= 30) {
//                 strDec = "тридцать "
//             }
//             if (resDec >= 40) {
//                 strDec = "сорок "
//             }
//             if (resDec >= 50) {
//                 strDec = "пятьдесят "
//             }
//             if (resDec >= 60) {
//                 strDec = "шестьдесят "
//             }
//             if (resDec >= 70) {
//                 strDec = "семьдесят "
//             }
//             if (resDec >= 80) {
//                 strDec = "восемьдесят "
//             }
//             if (resDec >= 90) {
//                 strDec = "девяносто "
//             }
//             if (resDec === 11) {
//                 strDec = "одиннадцать "
//             }
//             if (resDec === 12) {
//                 strDec = "двенадцать "
//             }
//             if (resDec === 13) {
//                 strDec = "тринадцать "
//             }
//             if (resDec === 14) {
//                 strDec = "четырнадцать "
//             }
//             if (resDec === 15) {
//                 strDec = "пятнадцать "
//             }
//             if (resDec === 16) {
//                 strDec = "шестнадцать "
//             }
//             if (resDec === 17) {
//                 strDec = "семнадцать "
//             }
//             if (resDec === 18) {
//                 strDec = "восемнадцать "
//             }
//             if (resDec === 19) {
//                 strDec = "девятнадцать "
//             }
//         }

//         if (resDec > 10 && resDec < 20) {
//         }
//         else {
//             let resUnit = inputNumber % 10
//             if (resUnit === 0) {
//                 strUnit = ""
//             } if (resUnit === 1) {
//                 strUnit = "один "
//             } if (resUnit === 2) {
//                 strUnit = "два "
//             } if (resUnit === 3) {
//                 strUnit = "три "
//             } if (resUnit === 4) {
//                 strUnit = "четыре "
//             } if (resUnit === 5) {
//                 strUnit = "пять "
//             } if (resUnit === 6) {
//                 strUnit = "шесть "
//             } if (resUnit === 7) {
//                 strUnit = "семь "
//             } if (resUnit === 8) {
//                 strUnit = "восемь "
//             } if (resUnit === 9) {
//                 strUnit = "девять "
//             }
//         }


//         // let resDec = inputNumber % 100
//         // if (resDec >= 10) {
//         //     strDec = "десять "

//         //     if (resDec >= 20) {
//         //         strDec = "двадцать "
//         //     }
//         //     if (resDec >= 30) {
//         //         strDec = "тридцать "
//         //     }
//         //     if (resDec >= 40) {
//         //         strDec = "сорок "
//         //     }
//         //     if (resDec >= 50) {
//         //         strDec = "пятьдесят "
//         //     }
//         //     if (resDec >= 60) {
//         //         strDec = "шестьдесят "
//         //     }
//         //     if (resDec >= 70) {
//         //         strDec = "семьдесят "
//         //     }
//         //     if (resDec >= 80) {
//         //         strDec = "восемьдесят "
//         //     }
//         //     if (resDec >= 90) {
//         //         strDec = "девяносто "
//         //     }
//     }
//     if (inputNumber < 100 && inputNumber > 9) {
//         // console.log("двузначные числа ")
//         let resTwo = inputNumber / 10
//         if (inputNumber > 9 && inputNumber < 20) {
//             if (inputNumber === 10) {
//                 strDec = "десять "
//             }
//             if (inputNumber === 11) {
//                 strDec = "одиннадцать "
//             }
//             if (inputNumber === 12) {
//                 strDec = "двенадцать "
//             }
//             if (inputNumber === 13) {
//                 strDec = "тринадцать "
//             }
//             if (inputNumber === 14) {
//                 strDec = "четырнадцать "
//             }
//             if (inputNumber === 15) {
//                 strDec = "пятнадцать "
//             }
//             if (inputNumber === 16) {
//                 strDec = "шестнадцать "
//             }
//             if (inputNumber === 17) {
//                 strDec = "семнадцать "
//             }
//             if (inputNumber === 18) {
//                 strDec = "восемнадцать "
//             }
//             if (inputNumber === 19) {
//                 strDec = "девятнадцать "
//             }

//         } else {
//             if (resTwo >= 1) {
//                 strTwo = "десять "
//                 if (resTwo >= 2) {
//                     strTwo = "двадцать "
//                 }
//                 if (resTwo >= 3) {
//                     strTwo = "тридцать "
//                 }
//                 if (resTwo >= 4) {
//                     strTwo = "сорок "
//                 }
//                 if (resTwo >= 5) {
//                     strTwo = "пятьдесят "
//                 }
//                 if (resTwo >= 6) {
//                     strTwo = "шестьдесят "
//                 }
//                 if (resTwo >= 7) {
//                     strTwo = "семьдесят "
//                 }
//                 if (resTwo >= 8) {
//                     strTwo = "восемьдесят "
//                 }
//                 if (resTwo >= 9) {
//                     strTwo = "девяносто "
//                 }
//             }
//             let resUnit = inputNumber % 10
//             if (resUnit === 0) {
//                 strTwoUnit = ""
//             } if (resUnit === 1) {
//                 strTwoUnit = "один "
//             } if (resUnit === 2) {
//                 strTwoUnit = "два "
//             } if (resUnit === 3) {
//                 strTwoUnit = "три "
//             } if (resUnit === 4) {
//                 strTwoUnit = "четыре "
//             } if (resUnit === 5) {
//                 strTwoUnit = "пять "
//             } if (resUnit === 6) {
//                 strTwoUnit = "шесть "
//             } if (resUnit === 7) {
//                 strTwoUnit = "семь "
//             } if (resUnit === 8) {
//                 strTwoUnit = "восемь "
//             } if (resUnit === 9) {
//                 strTwoUnit = "девять "
//             }
//         }

//     }
//     if (inputNumber < 10) {
//         if (inputNumber === 0) {
//             strUnit = "ноль "
//         } if (inputNumber === 1) {
//             strUnit = "один "
//         } if (inputNumber === 2) {
//             strUnit = "два "
//         } if (inputNumber === 3) {
//             strUnit = "три "
//         } if (inputNumber === 4) {
//             strUnit = "четыре "
//         } if (inputNumber === 5) {
//             strUnit = "пять "
//         } if (inputNumber === 6) {
//             strUnit = "шесть "
//         } if (inputNumber === 7) {
//             strUnit = "семь "
//         } if (inputNumber === 8) {
//             strUnit = "восемь "
//         } if (inputNumber === 9) {
//             strUnit = "девять "
//         }
//     }
//     return str + strDec + strUnit + strTwo + strTwoUnit
// }

// for (let i = 0; i < array.length; i++) {
//     let v = numbersToWords(array[i])

//     console.log(v);
// }


//объекты
// let b = true;
// let a = ['a', 4, b];


// let name = 'Dima';
// class Human {
//     constructor(n, a) {
//         this.name = n
//         this.age = a
//     }
//     sayHello = () => { console.log('Hello') };
//     sayName = () => { console.log('my name is ', this.name) };
//     sayAge = () => { console.log('my age is ', this.age) };
// }

// let hum1 = new Human(name, 36);
// let hum2 = new Human('Ruslan', 34);

// console.log('скажите привет');
// console.log(hum1.sayName());
// console.log(hum1.sayHello());
// console.log(hum2.sayName());
// // console.log(hum2.sayHello());
// class Trainer {
//     constructor(name, dogArray) {
//         this.trainerName = name
//         this.dogs = dogArray
//     }
//     sayHello() {
//         console.log("Меня зовут " + this.trainerName);
//     }
//     makeSound() {
//         console.log(this.trainerName + ' сказал "голос"')
//         this.dogs.forEach((item) => {
//             item.barking()
//         });
//     }
//     waveHand() {
//         console.log(this.trainerName + ' помахал рукой');
//         this.dogs.forEach(item => {
//             item.wagging()
//         });
//     }

// }
// class Dog {
//     constructor(name) {
//         this.dogName = name
//     }
//     barking() {
//         console.log(this.dogName + ' говорит "гав"')
//     }
//     wagging() {
//         console.log(this.dogName + ' виляет хвостом')
//     }
// }
// let dog_1 = new Dog("Барсик")
// let dog_2 = new Dog("Рэкс")
// let dog_3 = new Dog("Барон")

// let dogs = []
// dogs.push(dog_1)
// dogs.push(dog_2)
// dogs.push(dog_3)
// // console.log(dogs);

// let trainer = new Trainer("Александр", dogs)







