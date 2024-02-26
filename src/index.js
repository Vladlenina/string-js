import './index.scss';
const taskExample = document.querySelector('.task-example');
const btn = taskExample.querySelector('.btn');
const result = taskExample.querySelector('.result');

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
