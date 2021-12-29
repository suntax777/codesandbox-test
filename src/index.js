// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "hiro",
//   age: 28
// };
// console.log(val4);

// val4.name = "koba";
// val4.address = "Gifu";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "Hiro";
// const age = 41;

// //私の名前はHiroです。年齢は41です。

// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const func2 = (str) => {
//   return str
// }
// console.log(func2("hirohiro"))

// const func3 = (num1, num2) => {
//   return num1 + num2
// }
// console.log(func3(4,87));

// const myProfile = {
//   name: "hiro",
//   age: 41
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["hiroshi", 41];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello();

// const arr1 = [1, 2];
// // console.log(arr1)
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3)

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

const nameArr = ["田中", "山田", "小林"];
// for (let index = 0; index < nameArr.length; index++) {
//    console.log(`${index + 1}番目は${nameArr[index]}です`);
//  }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // // ["田中", "山田", "小林"]
// // console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "小林") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(...newNameArr);

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください';
// //数値を入力してください
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています': '今日範囲内です';
// }

// console.log(checkSum(20, 87));
// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//&&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
