let result = document.getElementById('result');
let ans = 0;

function clearResult() {
  result.value = '0';
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
  if (result.value === '') {
    result.value = '0';
  }
}

function calculate() {
  let expression = result.value.replace(/Ans/g, ans);
  try {
    ans = eval(expression);
    result.value = ans;
  } catch (error) {
    alert('Invalid expression');
  }
}

function insertText(text) {
  if (result.value === '0') {
    result.value = text;
  } else {
    result.value += text;
  }
}

function insertAns() {
  insertText('Ans');
}

function insertSqrt() {
  insertText('Math.sqrt(');
}

function insertPercent() {
  insertText('/100');
}

function insertBracket(type) {
  insertText(type);
}

document.getElementById('clear').addEventListener('click', clearResult);
document.getElementById('delete').addEventListener('click', deleteLastCharacter);
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('ans').addEventListener('click', insertAns);
document.getElementById('sqrt').addEventListener('click', insertSqrt);
document.getElementById('percent').addEventListener('click', insertPercent);
document.getElementById('left-bracket').addEventListener('click', () => insertBracket('('));
document.getElementById('right-bracket').addEventListener('click', () => insertBracket(')'));
document.getElementById('divide').addEventListener('click', () => insertText('/'));
document.getElementById('multiply').addEventListener('click', () => insertText('*'));
document.getElementById('subtract').addEventListener('click', () => insertText('-'));
document.getElementById('add').addEventListener('click', () => insertText('+'));
document.getElementById('decimal').addEventListener('click', () => insertText('.'));
document.getElementById('zero').addEventListener('click', () => insertText('0'));
document.getElementById('one').addEventListener('click', () => insertText('1'));
document.getElementById('two').addEventListener('click', () => insertText('2'));
document.getElementById('three').addEventListener('click', () => insertText('3'));
document.getElementById('four').addEventListener('click', () => insertText('4'));
document.getElementById('five').addEventListener('click', () => insertText('5'));
document.getElementById('six').addEventListener('click', () => insertText('6'));
document.getElementById('seven').addEventListener('click', () => insertText('7'));
document.getElementById('eight').addEventListener('click', () => insertText('8'));
document.getElementById('nine').addEventListener('click', () => insertText('9'));