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



// 再提出

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
// //提出フォームにて記入
// // 一回目のforループは二回目のforループの処理が終わる毎に、二回目のforループは三回目のforループの処理が終わる毎にループをしてった結果が出ると予想し、結果は合っていました。
// // 1.　一回目のforループは処理する毎に変数「i」が+1、「i < 4」条件によって変数「i」が数値3になるまで繰り返すように条件付けされています。そして中身は二回目のforループ処理を行われています。 
// // ２.　二回目のforループは処理する毎に変数「j」が+1、「j < namesの要素数（この場合4）」条件によって変数「j」が数値4になるまで繰り返すように条件付けされ、中身は三回目のforループ処理を行われています。
// // 3.　三回目のforループは処理する毎に変数「k」が+1、「k < 3」条件によって変数「k」が数値2になるまで繰り返しています（この場合は「k」の値が1なので、1と2のみループ）中身はコンソールに「names[j]」を出力するようにしています。
// // コンソールの結果は以上の処理によって出力されています。

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }
// //提出フォームにて記入
// // 文字列の"a: "や"b: "、"c: "にforループで繰り返された数字と連結した結果が出てくると予想し、結果は合っていました。
// // 一回目のforループは変数「i」を"a: "と連結させたものをコンソールに出力をする処理を行っています。二回目と三回目のforループの処理を終えたら「i+1」にして再度処理しています。
// // 二回目のforループは変数「i」を"b: "と連結させたものをコンソールに出力し、三回目のforループへと進んでいきます。
// // 三回目のforループは変数「i」を"c: "と連結させたものをコンソールに出力し、処理を終了したら一回目のforループに戻っていき、繰り返し処理が終わるまで繰り返しています。
// // 以上により、コンソールの結果通りになりました。



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


// 再提出

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

// // //(2) 関数 filterObjectForStrings を宣言してください。
// // /**
// //  * @param {object} オブジェクト
// //  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、
// //  * 値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// //  */
// function filterObjectForStrings(object) {
//   const result = {};
//   for (const key in object){
//     if (typeof object[key] === "string"){
//       result[key] = object[key];
//     }
//   }
//   return result;
// }

// // test(filterObjectForStrings(obj1), obj1); // 変化なし
// // test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// // test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

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
//   const resultarray = [];// 初期化
//   let result;
//   // 配列の中のオブジェクトを`filterObjectForStrings`に通す
//   for (const obj of arrayOfObjects){
//     result = filterObjectForStrings(obj);
//     resultarray.push(result);
//   }
//   // trueのみ新しい配列に入れる
//   return resultarray;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// // (4)以下のコードを実行する前に何が表示されるか予想してみましょう。
// // その後、コードを実行して予想が合っていたかどうかを確認してください。
// // なぜこのような結果になるのか理由を説明してください。
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) { //4回繰り返す
//   for (let j = 0; j < names.length; j++) { //配列の要素の数を数える
//     for (let k = 1; k < 3; k++) { //2回繰り返す
//     console.log(names[j]); //それぞれの要素の値をコンソールに出す
//     }
//   }
// }
// // 予想：配列の各値を2回コンソールに出力するのを4回繰り返す
// // 結果：予想と同じ

// // (5)以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。
// // コードを実行する前に何が表示されるか予想しましょう。
// // その後、コードを実行して予想が合っていたかどうかを確認してください。
// // なぜこのような結果になるのか理由を説明してください。
// for (let i = 0; i < 2; i++) { //2回繰り返す
//   console.log("a: " + i); //iに何の数字が入っているかをを"a: i"でコンソールに表示
//   for (let i = 0; i < 2; i++) { //2回繰り返す
//     console.log("b: " + i); //iに何の数字が入っているかをを"b: i"でコンソールに表示
//     for (let i = 0; i < 2; i++) {//2回繰り返す
//       console.log("c: " + i);//iに何の数字が入っているかをを"c: i"でコンソールに表示
//     }
//   }
// }
// // 予想：iに何の数字が入っているかを"a:""b:""c:"それぞれ2回表示する
// // 結果：aの中にb、bの中にcがあるので①a表示②b表示③c表示（ループするので2回表示）
// // ④ループしてbをもう一度表示⑤c表示（ループするので2回表示）⑥ループしてa表示⑦②～⑤をもう一度



// // shohei_shiga

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // TDD

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

// // 1

// /**
//  * @param {Array<string>} friendsArray - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// function sayHelloToFriends(friendsArray){
//   const resultFriend = [];
//   for (const friendname of friendsArray){
//     resultFriend.push(`Hello, ${friendname}!`)
//   }
//   return resultFriend;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 2

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const resultObject = {};
//   for (const key in object){
//     const value = object[key]
//     if (typeof value === "string") {
//       resultObject[key] = value;
//     }
//   }
//   return resultObject;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// // 3

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const resultArray = [];
//   for (const checkObject of arrayOfObjects){
//     resultArray.push(filterObjectForStrings(checkObject));
//   }
//   return resultArray
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// // 4

// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) { //以下の処理を初期値0のiが3となるまで繰り返す
//   for (let j = 0; j < names.length; j++) { //以下の処理を初期値0のjが配列の長さと同じ値になるまで繰り返す
//     for (let k = 1; k < 3; k++) { //以下の処理を初期値1のkが2になるまで繰り返す
//     console.log(names[j]);
//     }
//   }
// }

// //予想：consoleには"いち","いち", "に", "に", "さん","さん", "よん","よん"×16回の出力が行われる
// //    1爪のループで4回のループを行いながら、2つ目のループでも4回のループを行う。
// //    3つめのforで2回のループを行いながらその時のインデックスの値を返す。

// //結果： consoleには"いち","いち", "に", "に", "さん","さん", "よん","よん"×3回の出力が行われる
// //理由：




// // 4
// //予想：consoleには"いち","いち", "に", "に", "さん","さん", "よん","よん"のconsole表示が16回繰り返される
// //理由：1つめのループで4回のループを行いながら、2つ目のループでも4回のループを行う。
// //      3つめのforで2回のループを行いながらその時のインデックスの値を返す。

// // 結果：上記ループの表示が3回繰り返された。
// // 理由：2個目のforがいちとにの繰り返しに対して四回繰り返されるためだと思うが三回繰り返しの理由は推測できず。

// // 5


// // toma_nozaki

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //テストコード--------------------------------------------------------------------------------------------------------------
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
// //1---------------------------------------------------------------------------------------------------------------------------
// /**
//  * @param {Array<string>} arrayName - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// function sayHelloToFriends(arrayName) {
//     const result = [];
//     for (const name of arrayName) {
//         result.push("Hello, " + name + "!");
//     }
//     return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// //2----------------------------------------------------------------------------------------------------------------------------
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} object オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     const result = {};
//     for (const key in object) {
//         if (typeof object[key] === "string" ) {
//             result[key] = object[key];
//         }
//     }
//     return result;
//   }
  
//   test(filterObjectForStrings(obj1), obj1); // 変化なし
//   test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
//   test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //3------------------------------------------------------------------------------------------------------------------------------------
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     const result = [];
//     for ( const obj of arrayOfObjects) {
//         result.push(filterObjectForStrings(obj));
//     }
//     return result;
//   }
  
//   test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
//   // 2 番目の要素から値が 2 のペアは除くこと
//   test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
//   test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //4--------------------------------------------------------------------------------------------------------------------------
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }

// // namesの各要素を取り出して２回ずつコンソールに表示を４回実行する

// //5-----------------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("b: " + i);
//       for (let i = 0; i < 2; i++) {
//   　    console.log("c: " + i);
//       }
//     }
//   }

// // 始めはa→b→c実行するが同じ変数名なので内側のループが外側を上書きする。
// // 内外でi＜２回実行される


// // takuma_ishikawa

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

//   //Q1

//   /**
//  * @param {Array<string>} friend - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(friend){
//     const result = [];
//     for (let i = 0; i < friends.length; i++){
//         const greeting = "Hello, " + friend[i] + "!";
//         result.push(greeting);
//     }
//     return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// //Q2

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} object
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     // ここにコードを書きましょう
//     const result = {};
//     for (const key in object){
//         if (typeof object[key] === "string"){
//             result[key] = object[key];
//         }
//     }
//     return result;
//   }
  
//   test(filterObjectForStrings(obj1), obj1); // 変化なし
//   test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
//   test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


//   //Q3

//   /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     const result = [];
//     for (const object of arrayOfObjects){
//         result.push(filterObjectForStrings(object));
//     }
//     return result;

//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//   }
  
//   test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
//   // 2 番目の要素から値が 2 のペアは除くこと
//   test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
//   test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


//   //Q4
//   const names = ["いち", "に", "さん", "よん"];

//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < names.length; j++) {
//       for (let k = 1; k < 3; k++) {
//       console.log(names[j]);
//       }
//     }
//   }

//   // 3行目で4行目～9行目の処理を4回繰り返します。
//   // 4行目で5行目～8行目の処理を4回繰り返します。
//   // 5行目で6行目のconsole.log（配列の要素の表示）の処理を2回繰り返します。
//   // よって、ます配列の0番目の要素の表示が2回され、5行目のfor分で1,2,3番目の要素の表示の2回ずつ順に表示される。その後、4行目のfor分で、0~3番目の要素の2回表示が4回繰り返される。  

//   //Q5
//   for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("b: " + i);
//       for (let i = 0; i < 2; i++) {
//   　    console.log("c: " + i);
//       }
//     }
//   }

//   // 1行目で2行目～9行目の処理（a:1,a:2)を2回繰り返します。
//   // 3行目で4行目～8行目の処理(b:1,b:2)を2回繰り返します。
//   // 5行目で6行目の処理(c:1,c:2)を2回繰り返します。
//   // よって、1行目のfor文でa:0の処理→3行目のfor文でb:0の処理→5行目のfor文でc:0の処理→5行目のfor文でc:1の処理→3行目のfor文でb:1の処理→5行目のfor文でc:0の処理→5行目のfor文でc:1の処理→1行目のfor文でa:1の処理→3行目のfor文でb:0の処理→5行目のfor文でc:0の処理→5行目のfor文でc:1の処理→3行目のfor文でb:1の処理→5行目のfor文でc:0の処理→5行目のfor文でc:1の処理が行われる。


// // taisuke_satoi

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
// //   関数 sayHelloToFriends を宣言してください。
// /**
// * @param {Array<string>} array - 友達の名前が入った配列
// * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// */

// function sayHelloToFriends(array){
//   const result = [];
//   for (const element of array){
//       result.push("Hello, " + element + "!");
//   }
//   return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 関数 filterObjectForStrings を宣言してください。
// /**
// * @param {object} object オブジェクト
// * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、
// //  * 値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// */
// function filterObjectForStrings(object) {
//   const result = {};
//       for (const key in object) {
//       if (typeof object[key] === "string" ) {
//           result [key] = object[key];
//       }
//       } 
//       return result;
//   }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// //   関数 filterArrayForStrings を宣言してください。
// // この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。
// /**
// * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
// * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
// */
// function filterArrayForStrings(arrayOfObjects) {
//   const result = [];
//   for (const elem of arrayOfObjects) {
//     // ここの中で filterObjectForStrings(withSomething) を呼びましょう。
//     result.push(filterObjectForStrings(elem));
//   } 
//   return result;
// }
  
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //   以下のコードを実行する前に何が表示されるか予想してみましょう。
// // その後、コードを実行して予想が合っていたかどうかを確認してください。
// // なぜこのような結果になるのか理由を説明してください
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
// for (let j = 0; j < names.length; j++) {
//   for (let k = 1; k < 3; k++) {
//   console.log(names[j]);
//   }
// }
// }



// // 以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。
// // コードを実行する前に何が表示されるか予想しましょう。
// // その後、コードを実行して予想が合っていたかどうかを確認してください。
// // なぜこのような結果になるのか理由を説明してください。

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }


// // sawasei_in

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

// /**
//  * @param {Array<string>} nameArray - 友達の名前が入った配列
//  * @returns {Array<string>} helloArray 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// function sayHelloToFriends(nameArray) {
//   const helloArray = [];
//   for (const name of nameArray) {
//     helloArray.push(`Hello, ${name}!`)
//   } 
//   return helloArray;
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
// const filterObjectForStrings = function(object) {
//   const newObj = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       newObj[key] = object[key];
//     }
//   }
//   return newObj;
// }
// // ここにコードを書きましょう
// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   const newArray = [];
//   for (const obj of arrayOfObjects) {
//     newArray.push(filterObjectForStrings(obj))
//   }
//   return newArray;
// }
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// // コードが一番内側から外側に順次実行される

// // それぞれの層のiが影響しない。


// // hayato_kubo

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //test
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


// //Q1
// /**
//  * @param {Array<string>} arr - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     let name = arr[i];
//     newArr.push(`Hello, ${name}!`)
//   }
//   return newArr;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };


// //Q2
// /**
//  * @param {object} obj オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   let newObj = {}
//   for(const key in object) {
//     const value = object[key]
//     if(typeof object[key] === "string") {
//       newObj[key] = value;
//     }
//   }
//   return newObj
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// //Q3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const filteredArray = [];
//   for (const obj of arrayOfObjects) {
//     filteredArray.push(filterObjectForStrings(obj));
//   }
//   return filteredArray;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// //Q4
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }

// //【予想】
// //コンソールに
// // 　　　　いち
// // 　　　　いち
// // 　　　　に
// // 　　　　に
// // 　　　　さん
// // 　　　　さん
// // 　　　　よん
// // 　　　　よん
// // 　　　　が４回繰り返される

// //【理由】
// //console.log(names[j]);でnamesの中のインデントがjのものをコンソールで表示
// //を、for (let k = 1; k < 3; k++) {　で二回繰り返す。
// //この処理をfor (let i = 0; i < 4; i++) {　で４回繰り返すため


// //Q5
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }

// //予想
// // a: 0
// // b: 0
// // c: 0
// // c: 1
// // b: 1
// // c: 0
// // c: 1
// // a: 1
// // b: 0
// // c: 0
// // c: 1
// // b: 1
// // c: 0
// // c: 1

// //理由
// //
// // 「for (let i = 0; i < 2; i++) {iは0の状態でループが始まる。「b:1~console.log("c: " + i);までが処理された後、for (let i = 0; i < 2; i++) {が実行され、iが１になり、c:1が表示される。」までの処理が  for (let i = 0; i < 2; i++) {でもう一度処理される」ここまでの処理がfor (let i = 0; i < 2; i++) {でもう一度実行される

