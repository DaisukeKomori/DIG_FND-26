// // masato_ishichi

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //テスト用TDD関数宣言
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// /**
//  * @param {Array<string>} nameArr - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends (nameArr) {
//   const resultArr = [] ;
//   for (const val of nameArr) {
//     resultArr.push("Hello, " + val + "!") ;
//   }
//   return resultArr ;
// }


// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const resultObj = {} ;
//   for (const val in object) {
//     if (typeof object[val] === "string") {
//       resultObj[val] = object[val] ;
//     }
//   }
//   return resultObj ;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const resultArr = [] ;
//   for (const val of arrayOfObjects) {
//     resultArr.push(filterObjectForStrings(val)) ;
//   }
//   return resultArr ;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }
// //forループで、変数iを宣言しループさせる、処理内容はnamesの要素数が

// //変数namesに格納している配列要素それぞれが4回コンソールに表示される


// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }
// //


// // yuiha_mochizuki

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// // (1)関数 sayHelloToFriends を宣言してください。
// /**
//  * @param {Array<string>} name - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を
//  * 要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends (names) {
//   const result = [];
//   for (const name of names){
//     result.push("Hello, " +  name + "!");
//   }
//   return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);
// // // アドバイス： 新たに作成した 文字列（例： "Hello, Mario!"）を、
// // // 返り値となる新しい配列に追加しましょう。

// // 以下のテストではこれらの変数を使用します。
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// //(2) 関数 filterObjectForStrings を宣言してください。
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、
//  * 値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   const result = {};
//   for (const key in object){
//     if (typeof object[key] === "string"){
//       result[key] = object[key];
//     }
//   }
//   return result;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// // (3)関数 filterArrayForStrings を宣言してください。
// // この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 
//  * 引数で与えられた配列内の各オブジェクトについて、
//  * 値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、
//  * そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// 4, 5
// この問題までたどり着けませんでした


// shohei_shiga

'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// TDD

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

// 1

/**
 * @param {Array<string>} friendsArray - 友達の名前が入った配列
 * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
 */
// ここにコードを書きましょう

function sayHelloToFriends(friendsArray){
  const resultFriend = [];
  for (const friendname of friendsArray){
    resultFriend.push(`Hello, ${friendname}!`)
  }
  return resultFriend;
}

const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

// 2

/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
 */
function filterObjectForStrings(object) {
  // ここにコードを書きましょう
  const resultObject = {};
  for (const key in object){
    const value = object[key]
    if (typeof value === "string") {
      resultObject[key] = value;
    }
  }
  return resultObject;
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// 3

/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
 */
function filterArrayForStrings(arrayOfObjects) {
  // ここにコードを書きましょう.
  // どこかで関数 `filterObjectForStrings` を呼びましょう
  const resultArray = [];
  for (const checkObject of arrayOfObjects){
    resultArray.push(filterObjectForStrings(checkObject));
  }
  return resultArray
}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// 2 番目の要素から値が 2 のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// 4

const names = ["いち", "に", "さん", "よん"];

for (let i = 0; i < 4; i++) { //以下の処理を初期値0のiが3となるまで繰り返す
  for (let j = 0; j < names.length; j++) { //以下の処理を初期値0のjが配列の長さと同じ値になるまで繰り返す
    for (let k = 1; k < 3; k++) { //以下の処理を初期値1のkが2になるまで繰り返す
    console.log(names[j]);
    }
  }
}

//予想：consoleには"いち","いち", "に", "に", "さん","さん", "よん","よん"×16回の出力が行われる
//    1爪のループで4回のループを行いながら、2つ目のループでも4回のループを行う。
//    3つめのforで2回のループを行いながらその時のインデックスの値を返す。

//結果： consoleには"いち","いち", "に", "に", "さん","さん", "よん","よん"×3回の出力が行われる
//理由：




// 4
//予想：consoleには"いち","いち", "に", "に", "さん","さん", "よん","よん"のconsole表示が16回繰り返される
//理由：1つめのループで4回のループを行いながら、2つ目のループでも4回のループを行う。
//      3つめのforで2回のループを行いながらその時のインデックスの値を返す。

// 結果：上記ループの表示が3回繰り返された。
// 理由：2個目のforがいちとにの繰り返しに対して四回繰り返されるためだと思うが三回繰り返しの理由は推測できず。

// 5

