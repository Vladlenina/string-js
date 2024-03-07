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

btn1.addEventListener('click', () => {
  const text = input1.value;

  if (text) {
    const words = text.split('');
    const numbersArray = [];

    for (let i = 0; i < words.length; i++) {
      if (!isNaN(parseInt(words[i]))) {
        numbersArray.push(words[i]);
      }
    }
    const newStr = numbersArray.join('');
    result1.textContent = newStr;
    input1.value = '';
  }
});
