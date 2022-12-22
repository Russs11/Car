
// function squareItUp(startingNumber) {
//     square = startingNumber * startingNumber;
//     if (square > 1000000) {
//     console.log(square);
//     } else {
//         squareItUp(square);
//     }
// }
// squareItUp(333)




// Задача №1
// Написать функцию, которая принимает два числа и возвращает результат их умножения
// function multiplication(a,b) {
//     s = a * b;
//     console.log(s);
// }
// multiplication(78, 38)

// Задача №2
// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет"(только здесь данные, которые были переданы в функцию)
// function Hello(name, lastname, age) {

//     if (typeof Number(name) === "string") {
//         console.log("Вы не ввели именя ");
//     } else {
//         if (age < 5) {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " года")
//         } else {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " лет")

//         }
//     }
//     if (typeof Number(lastname) === "string") {
//         console.log("Вы ввели число вместо фамилии ");
//     } else {
//         if (age < 5) {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " года")
//         } else {
//             console.log("Привет " + name + " " + lastname + " с возрастом " + age + " лет")

//         }
//     }
// }
// Hello("7", "Петров", "3")


// Задача №3
// Написать функцию, которая принимает пол человека('M', 'F') в виде строки, результат функции возвращает строку "Ваш пол мужской"(или женский) или же "Ваш пол не определен"

// function Gender(g) {
//     if (g === "M") {
//         console.log("Ваш пол мужской ")
//     } else if (g === "F") {
//         console.log("Ваш пол женкский ")
//     }
//     else {
//         console.log("Ваш пол неопределен ")
//     }
// }
// Gender("M")
// Gender("F")
// Gender("r")


// Задача №4
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function DayOfWeek(day) {

//     if (day === 1){
//         console.log("Понедельник ")
//     } if (day === 2) {
//         console.log("Вторник ")
//     } if (day === 3) {
//         console.log("Среда ")
//     } if (day === 4) {
//         console.log("Четверг ")
//     } if (day === 5) {
//         console.log("Пятница ")
//     } if (day === 6) {
//         console.log("Суббота ")
//     } if (day === 7) {
//         console.log("Воскресенье ")
//     } else {
//         if (day > 7) {
//             console.log("Введите число от 1 до 7 ")
//         }
//         if (day < 1) {
//             console.log("Введите число от 1 до 7 ")
//         }
//     }
// }

// DayOfWeek (1)

// задача №5
// Написать функцию, которая принимает строку(в этом тексте 3 - 5 предложений), верните каждое первое слово в каждом предложении, через запятую.

// let text = "Иногда нам нужно выполнить различные действия в зависимости от условий. Для этого мы можем использовать инструкцию if и условный оператор ?, который также называют оператором «вопросительный знак». Исследуемый документ выполнен с одной стороны двух листов бумаги светло-жёлтого цвета, размерами 200х290 мм, Печатный текст в документе выполнен красящим веществом чёрного цвета. В верхней правой части листов имеется рукописная запись в виде цифрового обозначения «115», «116», соответственно, выполненные красящим веществом серого цвета. в средней части второго листа документа под основным текстом расположен оттиск круглой гербовой печати от имени Молодежненского поселкового Совета народных депутатов, нанесенный фиолетовым красящим веществом, и две подписи, выполненные светло-синим и фиолетовым красящими веществами. В нижней правой части каждого листа документа расположен оттиск штампа «ЭКЦ - Исследуемый», нанесенный светло-синим красящим веществом. На втором листе документа в месте расположения штампа «ЭКЦ - Исследуемый», расположена подпись, выполненная красящим веществом сине-фиолетового цвета."

// function firstWord(text) {
//     let accum = ""
//     let reg = /[А-Я]/
//     let save = false
//     let splits = text.split('.',);
//     console.log(splits);
//     for (i = 0; i < splits.length; i++) {

//         for (j = 0; j < splits[i].length; j++) {
//             if (splits[i][j].match(reg))
//                 save = true
//             if (splits[i][j] === " ") {
//                 save = false
//             }
//             if (splits[i][j] === ",") {
//                 save = false
//             }
//             if (save) {
//                 accum = accum + splits[i][j]
//             }
//         }
//         accum = accum + ", "
//     }
//     console.log(accum);
// }

// firstWord(text);

// Задача №6
//  Написать функцию, которой передаем имя, и она возвращает приветствие в зависимости от времени суток(Доброе утро\день\вечер\ночи Иван)
// function Hello(name) {
//     let now = new Date();
//     let time = ""
//     // let getHour = now.getHours()
//     let getHour = 22
//     if (getHour >= 10 && getHour < 17) {
//         time = "день"
//     } if (getHour >= 17 && getHour < 21) {
//         time = "вечер"
//     } if (getHour >= 21 || getHour < 4) {
//         time = "ночи"
//     }
//     if (getHour < 10 && getHour >= 4) {
//         time = "утро"
//     }
//     console.log(`Добрый ${time} ${name}`)
// }
// Hello("Селиме")

// Задача №7
// Вывести числа от 1 до 100 в столбец.К каждой цифре подписать состояние возраста(1 - 17 ребенок, 18 - 30 - молодой, 30 - 55 - зрелый, от 55 - старый).Например. 33 - зрелый

// function Age() {
//     for (i = 1; i < 101; i++){
//         let j = " - ребенок"
//         let y = " - молодой"
//         let o = " - зрелый"
//         let s = " - старый"
//         if (i < 18) {
//             console.log(i + j)
//         }
//         if (i > 17 && i < 31) {
//             console.log(i + y)
//         }
//         if (i > 30 && i < 56) {
//             console.log(i + o)
//         }
//         if (i > 55 && i < 101) {
//             console.log(i + s)
//         }
//     }
// }
// function Age(num) {
//     let age = ''
//     if (num < 18) {
//         age = ' - ребенок'
//     }
//     if (num > 17 && num < 31) {
//         age = " - молодой"
//     }
//     if (num > 30 && num < 56) {
//         age = " - зрелый"
//     }
//     if (num > 55 ) {
//         age = " - старый"
//     }
//     return age
// }
// // Age()

// function HelloNameAge(name, age) {

//     console.log(name + Age(age))
// }

// HelloNameAge('Вася', 102)

// Задача про улитку


// let whatDayArr = []
// let dayWeather = ""
// let snail = 100
// function SnailOnTree() {
//     for (i = 0; i < 365; i++) {
//         const whatDay = (Math.random())
//         if (whatDay < 0.3) {
//             dayWeather = false
//         }
//         if (whatDay > 0.7) {
//             dayWeather = true
//         }
//         whatDayArr.push(dayWeather)
//     }
//     for (j = 0; j < whatDayArr.length; j++) {
//         if (whatDayArr[j] === true) {
//             snail += 2
//             if (snail > 300) {
//                 snail = 300
//             }
//         }
//         else {
//             snail -= 3
//             if (snail <= 0) {
//                 snail = 0
//             }
//         }
//     }
//     console.log(snail)
// }
// SnailOnTree()

// Задача на масивы
// Задача №1
// let numbersArr = [2, 6, 4, 6, 8]
// function evenNumber(nums) {
//     let whatNumber = 0
//     let res = true
//     nums.forEach(item => {
//         (item % 2) === 1 ? res = false : null
//     });

//     res ? console.log("все элементы четные") : console.log("есть не четные элементы")

//     // if (whatNumber % 2 === 0)
//     //     console.log("все элементы четные")
//     // else
//     //     console.log("есть не четные элементы")

//     // for (i = 0; i < numbersArr.length; i++) {
//     //     if ((numbersArr[i] % 2) === 0) {
//     //         whatNumber = "все элементы четные"
//     //     } if ((numbersArr[i] % 2) === 1) {
//     //         whatNumber = "есть не четные элементы"
//     //         break
//     //     }

//     // }
//     // console.log(whatNumber);
// }
// evenNumber(numbersArr)


// 1 - Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.

// 3 - Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1, 2, 5, 12, 15, 21] вернет[5, 15])
let fiveArr = [1, 2, 5, 12, 15, 21, 25]
function FiveNumber(arr) {
    let resArr = arr.filter(item => {
        if (item % 5 === 0)
            return item
    })

    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i] % 5 === 0) {
    //         resArr.push(arr[i])
    //     }
    // }
    console.log(resArr)
}
FiveNumber(fiveArr)
FiveNumber([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 24, 25, 30])


// 4 - Написать функцию, которая принимает массив чисел, например[1, 2, 3, 4, 5] и функция возращает среднее арифметическое, (округлить результат до десятых)
let numbersArr = [3, 6, 5, 8]
function Average(arr) {
    let resAverage = arr.reduce((a, b) => (a + b)) / arr.length
    console.log(resAverage)
}
Average(numbersArr)

// 5 - Написать функцию, которая принимает массив чисел, например[1, 2, 3, 4, 5], и переносит первый элемент массива в конец(например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься
// 6 - Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст([{ name: 'Иван', age: 23 }, ...]) и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".