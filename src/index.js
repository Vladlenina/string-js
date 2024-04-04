import './index.scss';

//Пример
const taskExample = document.querySelector('.task-example');
const btn = taskExample.querySelector('.btn');
const result = taskExample.querySelector('.result');
const input = taskExample.querySelector('#input');

btn.addEventListener('click', () => {
  const text = input.value;

  if (text) {
    const words = text.split(' ');
    const revWords = [];
    for (let word of words) {
      let revWord = '';
      for (let i = word.length - 1; i >= 0; --i) {
        revWord += word[i];
      }
      revWords.push(revWord);
    }
    const revText = revWords.join(' ');
    result.textContent = revText;
    input.value = '';
  }
});

// Задача 12.1
const task1 = document.querySelector('.task-1');
const input1 = task1.querySelector('#input-1');
const btn1 = task1.querySelector('.btn');
const result1 = task1.querySelector('.result');

btn1.addEventListener('click', () => {
  const text = input1.value;

  if (text) {
    // const arrayChars = text.split('');
    // const newArray = [];

    // arrayChars.forEach((char) => {
    //   if (!isNaN(parseInt(char))) {
    //     newArray.push(char);
    //   }
    // });
    const arrayChars = text.replace(/\D/g, '');
    let normalChars;
    if (arrayChars[0] === '8') {
      normalChars = ['+7', ...arrayChars.slice(1)];
    } else {
      normalChars = ['+', ...arrayChars];
    }
    const newStr = normalChars.join('');
    result1.textContent = newStr;
    input1.value = '';
  }

  //   let normalChars;
  //   if (newArray[0] === '8') {
  //     normalChars = ['+7', ...newArray.slice(1)];
  //   } else {
  //     normalChars = ['+', ...newArray];
  //   }
  //   const newStr = normalChars.join('');
  //   result1.textContent = newStr;
  //   input1.value = '';
  // }
});

// Задача 12.2
const task2 = document.querySelector('.task-2');
const input2 = task2.querySelector('#input-2');
const btn2 = task2.querySelector('.btn');
const result2 = task2.querySelector('.result');

btn2.addEventListener('click', () => {
  const text = input2.value;

  if (text) {
    // const words = text.split('');
    // const numbersArray = [];

    // let str = '';

    // for (let i = 0; i < words.length; i++) {
    //   const char = words[i];
    //   if (!isNaN(parseInt(char))) {
    //     str += char;
    //     if (i == words.length - 1) {
    //       numbersArray.push(str);
    //       str = '';
    //     }
    //   } else if (str) {
    //     numbersArray.push(str);
    //     str = '';
    //   }
    // }
    const numbersArray = text.match(/\d+/g);
    console.log(numbersArray);
    // const newNumbersArray = numbersArray.map((elem) => parseInt(elem));
    // result2.textContent = newNumbersArray;
    result2.textContent = numbersArray;
    input2.value = '';
  }
});

//	const text = "12 Один567два и три78";

// const chars = text.split('');

// const numbersAndNaN = chars.map((elem) => parseInt(elem));

// const strWithNumbersAndNaN = numbersAndNaN.join("");

// const numbers = strWithNumbersAndNaN.split("NaN").filter((elem) =>  elem !== '');

// console.log(numbers);

// Задача 12.3
const task3 = document.querySelector('.task-3');
const input3 = task3.querySelector('#input-3');
const btn3 = task3.querySelector('.btn');
const result3 = task3.querySelector('.result');

btn3.addEventListener('click', () => {
  const text = input3.value;

  if (text) {
    // const arrayText = text.split('');

    // let toLowerCaseCount = 0;
    // let toUpperCaseCount = 0;

    // arrayText.forEach((char) => {
    //   if (char === ' ') return;

    //   if (char === char.toLowerCase()) {
    //     toLowerCaseCount++;
    //   } else {
    //     toUpperCaseCount++;
    //   }
    // });
    const toLowerCaseCount = text.match(/[a-z]/g).length;
    const toUpperCaseCount = text.match(/[A-Z]/g).length;
    result3.textContent = `Прописных: ${toUpperCaseCount}, строчных: ${toLowerCaseCount}`;
    input3.value = '';
  }
});

// const text = "One Two Three";

// if (text) {
//   const arrayText = text.split('');

//   let toLowerCaseCount = 0;
//   let toUpperCaseCount = 0;

//    for (let char of arrayText) {
//     if (char === ' ') continue;

//     if (char === char.toLowerCase()) {
//       toLowerCaseCount++;
//     } else if (char === char.toUpperCase()) {
//       toUpperCaseCount++;
//     }
//   }

// Задача 12.4
const task4 = document.querySelector('.task-4');
const input4 = task4.querySelector('#input-4');
const btn4 = task4.querySelector('.btn');
const result4 = task4.querySelector('.result');

btn4.addEventListener('click', () => {
  const text = input4.value;

  if (text) {
    const arrayChars = text.split(' ');
    let longestWord = '';

    arrayChars.forEach((char) => {
      if (char.length > longestWord.length) {
        longestWord = char;
      }
    });
    result4.textContent = `Слово: "${longestWord}", длина: ${longestWord.length}`;
    input4.value = '';
  }
});

// Задача 12.5
const task5 = document.querySelector('.task-5');
const input5 = task5.querySelector('#input-5');
const btn5 = task5.querySelector('.btn');
const result5 = task5.querySelector('.result');

btn5.addEventListener('click', () => {
  const text = input5.value;
  let textResult = '';
  if (text) {
    const arrayChars = text.split('');
    const reversedChars = arrayChars.toReversed().join('');

    textResult = text === reversedChars;
    result5.textContent = textResult;
    input5.value = '';
  }
});

// Задача 12.6

const task6 = document.querySelector('.task-6');
const input6 = task6.querySelector('#input-6');
const btn6 = task6.querySelector('.btn');
const result6 = task6.querySelector('.result');

btn6.addEventListener('click', () => {
  const text = input6.value;
  if (text) {
    // const words = text.split(' ');
    // const filteredArray = words.filter((word) => word !== '');
    // const string = filteredArray.join(' ');

    const string = text.replace(/\s/g, ' ');

    result6.textContent = `"${string}"`;
    input6.value = '';
  }
});

// Задача 12.7
const task7 = document.querySelector('.task-7');
const input7 = task7.querySelector('#input-7');
const btn7 = task7.querySelector('.btn');
const result7 = task7.querySelector('.result');

btn7.addEventListener('click', () => {
  const text = input7.value;
  if (text) {
    const words = text.split(' ');
    const changedWords = words.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    const string = changedWords.join(' ');
    result7.textContent = `"${string}"`;
    input7.value = '';
  }
});
