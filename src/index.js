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
    const arrayChars = text.split('');
    const newArray = [];

    for (let i = 0; i < arrayChars.length; i++) {
      if (!isNaN(parseInt(arrayChars[i]))) {
        newArray.push(arrayChars[i]);
      }
    }
    let normalChars;
    if (newArray[0] === '8') {
      normalChars = ['+7', ...newArray.slice(1)];
    } else {
      normalChars = ['+', ...newArray];
    }

    const newStr = normalChars.join('');
    result1.textContent = newStr;
    input1.value = '';
  }
});

// Задача 12.2
const task2 = document.querySelector('.task-2');
const input2 = task2.querySelector('#input-2');
const btn2 = task2.querySelector('.btn');
const result2 = task2.querySelector('.result');

btn2.addEventListener('click', () => {
  const text = input2.value;

  if (text) {
    const words = text.split('');
    const numbersArray = [];

    let str = '';

    for (let i = 0; i < words.length; i++) {
      const char = words[i];
      if (!isNaN(parseInt(char))) {
        str += char;
        if (i == words.length - 1) {
          numbersArray.push(str);
          str = '';
        }
      } else if (str) {
        numbersArray.push(str);
        str = '';
      }
    }
    const newNumbersArray = numbersArray.map((elem) => parseInt(elem));
    result2.textContent = newNumbersArray;
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
    const arrayText = text.split('');

    let toLowerCaseCount = 0;
    let toUpperCaseCount = 0;

    for (let i = 0; i < arrayText.length; i++) {
      const char = arrayText[i];
      if (char !== ' ' && char === char.toLowerCase()) {
        toLowerCaseCount++;
      } else if (char !== ' ' && char === char.toUpperCase()) {
        toUpperCaseCount++;
      }
    }
    result3.textContent = `Прописных: ${toUpperCaseCount}, строчных: ${toLowerCaseCount}`;
    input3.value = '';
  }
});

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

    for (let i = 0; i < arrayChars.length; i++) {
      if (arrayChars[i].length > longestWord.length) {
        longestWord = arrayChars[i];
      }
    }
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
    const reversedChars = arrayChars.reverse().join('');

    if (text === reversedChars) {
      textResult = 'true';
    } else {
      textResult = 'false';
    }
    result5.textContent = textResult;
    input5.value = '';
  }
});
