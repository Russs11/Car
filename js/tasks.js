
// let whatDayArr = []
// function AddDaysInArr(arr) {
//     for (i = 365; i > 0; i--) {
//         const whatDay = (Math.random())
//         if (whatDay < 0.5) {
//             arr[i] = false
//         }
//         if (whatDay > 0.5) {
//             arr[i] = true
//         }
//     }
//     // console.log(arr);
// }
// AddDaysInArr(whatDayArr)

// class Snail {
//     name;
//     heightOnTree;

//     constructor(name, height) {
//         this.name = name
//         this.heightOnTree = height
//     }

//     getName() {
//         return this.name
//     }
//     getHeightOnTree() {
//         return this.heightOnTree
//     }
//     setHeightOnTree(value) {
//         this.heightOnTree = value
//     }
//     goUp() {
//         this.heightOnTree += (Math.round(Math.random() * (10 - 1) + 1))
//     }
//     goDown() {
//         this.heightOnTree -= (Math.round(Math.random() * (10 - 1) + 1))
//     }
//     greating() {
//         console.log("Hello");
//     }
// }
// class Tree {
//     height = 300
//     snailArr;
//     daysArr;
//     constructor(snailArr, daysArr) {
//         this.snailArr = snailArr
//         this.daysArr = daysArr
//     }
//     SnailsToGo() {
//         for (let i = 0; i < this.daysArr.length; i++) {
//             if (this.daysArr[i]) {
//                 this.snailArr.forEach(item => {
//                     item.goUp()
//                 })
//             } else {
//                 this.snailArr.forEach(item => {
//                     item.goDown()
//                 })
//             }
//             this.SnailLimits()
//         }
//     }
//     WhereSnailsAre() {
//         // console.log(this.snailArr.length);
//         for (let i = 0; i < this.snailArr.length; i++) {
//             console.log(this.snailArr[i].getName(), this.snailArr[i].getHeightOnTree())
//         }
//     }
//     SnailLimits() {
//         this.snailArr.forEach(item => {
//             if (item.getHeightOnTree() > this.height) {
//                 item.setHeightOnTree(this.height)
//             }
//             if (item.getHeightOnTree() < 0) {
//                 item.setHeightOnTree(0)
//             }
//         })
//     }
// }
// function f1(s1, s2, s3, arr) {
//     arr.forEach(item => {
//         if (item) {
//             s1.goUp()
//             s2.goUp()
//             s3.goUp()
//         } else {
//             s1.goDown()
//             s2.goDown()
//             s3.goDown()
//         }
//     })
//     console.log(`${s1.getName()} - `, s1.getHeightOnTree());
//     console.log(`${s2.getName()} - `, s2.getHeightOnTree());
//     console.log(`${s3.getName()} - `, s3.getHeightOnTree());
// }

// const snail1 = new Snail("Вася", 100)
// const snail2 = new Snail("Петя", 130)
// const snail3 = new Snail("Сеня", 140)
// const tree = new Tree([snail1, snail2, snail3], whatDayArr)

// tree.SnailsToGo()
// tree.WhereSnailsAre()
// f1(snail1, snail2, snail3, whatDayArr)


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


// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1;
// let yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd;
// }
// if (mm < 10) {
//     mm = '0' + mm;
// }
// let day = dd + '.' + mm + '.' + yyyy;
// function Whatday() {
//     console.log(day);
// }
// Whatday()









// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example(Input-- > Output):

// 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
// 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
// // 4 -- > 0(because 4 is already a one - digit number)
// function persistence(num) {
//     let numArr = []
//     numArr = ('' + num).split('')
//     let iterationNum = 0
//     function counter(arr) {
//     let result = 1
//         arr.forEach(item => {
//             result *= item
//         })
//         result = ('' + result).split('')
//         return result
// }

//     while (numArr.length > 1) {
//         iterationNum++
//         numArr = counter(numArr)
//     }
//     console.log(iterationNum);
// }

// persistence(999);


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//     Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers) {
//     const newNumbers = numbers.replace(/\s+/g, m => (m == ' ') ? ',' : '');
//     const number = parseInt(newNumbers)
//     console.log(number)
//     // numbers.split('')
//     // console.log(Math.min(newNumbers))
// }

// highAndLow("1 2 3 4 5")
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// function generateHashtag(str) {

//     str = str.replace(/\b\w/g, (c) => c.toUpperCase());
//     const splitted = str.split(" ");
//     splitted.unshift("#");
//     const res = splitted.join("");
//     if (res === "#") {
//         return false;
//     } else if (res.length >= 140) {
//         return false;
//     } else {
//         return res
//     }
// }

// // console.log(generateHashtag(''));
// function numbersTostring(arr){
//   // const res = arr.split('78 2948')
//    const res = arr.split('\n')
//   const res2 = res.map(item =>{
//     return item.slice(8)
//   })
//   console.log(res2.join(', '))
//   // const res2 = res.split(' ,').join(',')
//  // console.log(res2)
// }

// numbersTostring(
// `78 2948 2867219
// 78 2948 2867343
// 78 2948 2867007

// `)

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     console.log(response)
//     return response.json()
//   })
//   .then(json => console.log(json))
//   .catch(error => console.error(error))
function findShort(s){
s = s.split(' ').reduce((a,b) =>{
    return a.length < b.length ? a : b
  })
  return s.length
}

console.log(findShort("a perhaps"))