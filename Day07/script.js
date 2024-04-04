
// // *** toshikatsu hoshi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // 課題1
// // 引数に人の名前（文字列型の値）を 1 つ取り、
// // それを使って挨拶文を返す greeting という
// // 名前の関数を作成してください。
// // 下記のテストケースを実行して、期待通りの挨拶文が
// // コンソールに表示されるようにしましょう。

// /**
//  * @param {string} name - 名前
//  * @returns {string} "Hello, (name)!"
//  */
// function greeting(name) {
//   return "Hello, " + name + "!";
// }
// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //　課題２
// // average という名前の関数を宣言してください。
// // この関数は引数として数値型の値を 2 つ取り、
// // その 2 つの数の平均を返します。
// // 下記のテストケースを実行して、
// // 期待通りの数値がコンソールに表示されるようにしましょう。
// /**
//  * @param {number} score1 - 点数１
//  * @param {number} score2 - 点数２
//  * @returns {number} score1とscore2の平均点
//  */
// function average(score1, score2) {
//   return (score1 + score2) * 0.5;
// }
// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// // 課題３
// // 関数 describeTheWeather を宣言してください。
// // 以下が、それぞれの季節の適切な温度です。
// // 春 --> 暖かい
// // 夏 --> 暑い
// // 秋 --> 涼しい
// // 冬 --> 寒い
// // もし与えられた温度が適切であれば、
// // この季節の平均的な気温です を返してください。
// // もしそうでなければ、この季節には珍しい気温です を
// // 返してください。
// // 用意されたテストをパスできていれば、
// // コンソールに OK! Test PASSED. と表示されます。
// // すべてのテストをパスしましょう。
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//   // ここにコードを書きましょう
//   if (season === "春" && temperature === "暖かい")  {
//     return "この季節の平均的な気温です。";
//   } else if (season === "夏" && temperature === "暑い") {
//     return "この季節の平均的な気温です。";
//   } else if (season === "秋" && temperature === "涼しい") {
//     return "この季節の平均的な気温です。";
//   } else if (season === "冬" && temperature === "寒い") {
//     return "この季節の平均的な気温です。";
//   } else {
//     return "この季節には珍しい気温です。";
//   }
// }
// let actual;
// let expected;

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// // *** masato ishichi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //課題１
// function greeting(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //課題２
// function average(num1,num2) {
//     return (num1 + num2) /2;
// }

// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //関数３
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} szn - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} tem - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(szn,tem) {
//     // ここにコードを書きましょう
//     if (szn === "春" && tem === "暖かい") {
//         return "この季節の平均的な気温です。";
//     } else if (szn === "春" && tem === "暑い") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "春" && tem === "涼しい") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "春" && tem === "寒い") {
//         return "この季節には珍しい気温です。"
//     } else if (szn === "夏" && tem === "暖かい") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "夏" && tem === "暑い") {
//         return "この季節の平均的な気温です。";
//     } else if (szn === "夏" && tem === "涼しい") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "夏" && tem === "寒い") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "秋" && tem === "暖かい") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "秋" && tem === "暑い") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "秋" && tem === "涼しい") {
//         return "この季節の平均的な気温です。";
//     } else if (szn === "秋" && tem === "寒い") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "冬" && tem === "暖かい") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "冬" && tem === "暑い") {
//         return "この季節には珍しい気温です。";
//     } else if (szn === "冬" && tem === "涼しい") {
//         return "この季節には珍しい気温です。"; 
//     } else if (szn === "冬" && tem === "寒い") {
//         return "この季節の平均的な気温です。";
//     }
// }
//   // テスト
//   let actual = describeTheWeather("春", "暖かい");
//   let expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   // さらにテストを書いて、コードが正しいことを確認してください
//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
//   actual = describeTheWeather("夏", "暖かい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("秋", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
//   actual = describeTheWeather("秋", "涼しい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("冬", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  

// *** hayato kubo ***

  'use strict'
  // 1行目に記載している 'use strict' は削除しないでください
  
  // ファイル全体で使用する tdd 変数を宣言
  let expected;
  let actual;
  
  //-----Q1-----
  
  //解答
  function greeting(name) {
    if (typeof name === "string") {
      if ((name).length !== 0) {
        return "Hello, " + name + "!";
      } else {
        return "名前を入力してください。";
      }
    } else {
      return "名前を入力してください。"
    }
  }
  
  // テスト
  console.log(greeting("Kana")); // => "Hello, Kana!"
  console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
  
  
  //-----Q2-----
  //解答
  function average(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return (num1 + num2) /2;
    } else if (typeof num1 === "number" && typeof num2 !== "number") {
      return "数値を入力してください。（修正が必要な個所：" + num2 + " )"
    } else if (typeof num1 !== "number" && typeof num2 === "number") {
      return "数値を入力してください。（修正が必要な個所：" + num1 + " )"
    } else {
      return "数値を入力してください。（修正が必要な個所：" + num1 + "," + num2 + " )"
    }
  }
  
  // テスト
  console.log(average(1, 2)); // => 1.5
  console.log(average(100, 300)); // => 200
  
  
  //-----Q3-----
  //解答
  /**
   * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
   * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
   * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
   */
  function describeTheWeather(season, temperature) {
    // ここにコードを書きましょう
    if (season === "春") {
      if (temperature === "暖かい") {
        return "この季節の平均的な気温です。";
      } else if (temperature === "寒い" || temperature === "暑い" || temperature === "涼しい") {
        return "この季節には珍しい気温です。";
      } else {
        return "現在の気温について入力してください。";
      }
    } else if (season === "夏") {
      if (temperature === "暑い") {
        return "この季節の平均的な気温です。";
      } else if (temperature === "暖かい" || temperature === "涼しい" || temperature === "寒い") {
        return "この季節には珍しい気温です。";
      } else {
        return "現在の気温について入力してください。";
      }
    } else if (season === "秋") {
      if (temperature === "涼しい") {
        return "この季節の平均的な気温です。";
      } else if (temperature === "暖かい" || temperature === "暑い" || temperature === "寒い") {
        return "この季節には珍しい気温です。";
      } else {
        return "現在の気温について入力してください。";
      }
    } else if (season === "冬") {
      if (temperature === "寒い") {
        return "この季節の平均的な気温です。";
      } else if (temperature === "暖かい" || temperature === "暑い" || temperature === "涼しい") {
        return "この季節には珍しい気温です。";
      } else {
        return "現在の気温について入力してください。";
      }
    } else if (season !== "春" || season !== "夏" || season !== "秋" || season !== "冬"){
      return "現在の季節を入力してください"
    }
  }
  
  
  // テスト
  actual = describeTheWeather("春", "暖かい");
  expected = "この季節の平均的な気温です。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather("春", "寒い");
  expected = "この季節には珍しい気温です。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // さらにテストを書いて、コードが正しいことを確認してください
  actual = describeTheWeather("秋", "涼しい");
  expected = "この季節の平均的な気温です。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather("冬", "寒い");
  expected = "この季節の平均的な気温です。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather("冬", "暑い");
  expected = "この季節には珍しい気温です。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather(true , "熱い");
  expected = "現在の季節を入力してください";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather("冬", "love");
  expected = "現在の気温について入力してください。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather("春", 100);
  expected = "現在の気温について入力してください。";
  
  if (actual === expected) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }


// // *** yuiha mochizuki ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください
// // 1.引数に人の名前（文字列型の値）を 1 つ取り、
// // それを使って挨拶文を返す greeting という名前の関数を作成してください。
// // 下記のテストケースを実行して、期待通りの挨拶文が
// // コンソールに表示されるようにしましょう。
// function greeting(name){
//     return "Hello, " + name + "!";
// }
// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
// // 2.average という名前の関数を宣言してください。
// // この関数は引数として数値型の値を 2 つ取り、
// // その 2 つの数の平均を返します。
// // 下記のテストケースを実行して、期待通りの数値が
// // コンソールに表示されるようにしましょう。
// function average(num1, num2){
//     return (num1 + num2) / 2;
// }
// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200
// // 関数 describeTheWeather を宣言してください。
// // 以下が、それぞれの季節の適切な温度です。
// // 春 --> 暖かい
// // 夏 --> 暑い
// // 秋 --> 涼しい
// // 冬 --> 寒い
// // もし与えられた温度が適切であれば、
// // "この季節の平均的な気温です"を返してください。
// // もしそうでなければ、"この季節には珍しい気温です" を返してください。
// // 用意されたテストをパスできていれば、
// // コンソールに "OK! Test PASSED." と表示されます。
// // すべてのテストをパスしましょう。
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// let actual;
// let expected;
// function describeTheWeather(season, temp) {
//   // ここにコードを書きましょう
//     if(season === "春"){
//         if(temp === "暖かい"){
//             return "この季節の平均的な気温です。";
//         }else{
//             return "この季節には珍しい気温です。";
//         }
//     }else if(season === "夏"){
//         if(temp === "暑い"){
//             return "この季節の平均的な気温です。";
//         }else{
//             return "この季節には珍しい気温です。";
//         }
//     }else if(season === "秋"){
//         if(temp === "涼しい"){
//             return "この季節の平均的な気温です。";
//         }else{
//             return "この季節には珍しい気温です。";
//         }
//     }else if(season === "冬"){
//         if(temp === "寒い"){
//             return "この季節の平均的な気温です。";
//         }else{
//             return "この季節には珍しい気温です。";
//         }
//     }
// }
// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";
// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";
// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";
// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";
// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";
// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
