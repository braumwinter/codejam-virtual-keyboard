const buttonList = [
  ['`', '~', 'ё', 'Ё', 'Backquote'],
  ['1', '!', '1', '!', 'Digit1'],
  ['2', '@', '2', '"', 'Digit2'],
  ['3', '#', '3', '№', 'Digit3'],
  ['4', '$', '4', ';', 'Digit4'],
  ['5', '%', '5', '%', 'Digit5'],
  ['6', '^', '6', ':', 'Digit6'],
  ['7', '&', '7', '?', 'Digit7'],
  ['8', '*', '8', '*', 'Digit8'],
  ['9', '(', '9', '(', 'Digit9'],
  ['0', ')', '0', ')', 'Digit0'],
  ['-', '_', '-', '_', 'Minus'],
  ['=', '+', '=', '+', 'Equal'],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  ['q', 'Q', 'й', 'Й', 'KeyQ'],
  ['w', 'W', 'ц', 'Ц', 'KeyW'],
  ['e', 'E', 'у', 'У', 'KeyE'],
  ['r', 'R', 'к', 'К', 'KeyR'],
  ['t', 'T', 'е', 'Е', 'KeyT'],
  ['y', 'Y', 'н', 'Н', 'KeyY'],
  ['u', 'U', 'г', 'Г', 'KeyU'],
  ['i', 'I', 'ш', 'Ш', 'KeyI'],
  ['o', 'O', 'щ', 'Щ', 'KeyO'],
  ['p', 'P', 'з', 'З', 'KeyP'],
  ['[', '{', 'х', 'Х', 'BracketLeft'],
  [']', '}', 'ъ', 'Ъ', 'BracketRight'],
  ['\\', '|', '\\', '/', 'Backslash'],
  ['CapsLock', 'CapsLock'],
  ['a', 'A', 'ф', 'Ф', 'KeyA'],
  ['s', 'S', 'ы', 'Ы', 'KeyS'],
  ['d', 'D', 'в', 'В', 'KeyD'],
  ['f', 'F', 'а', 'А', 'KeyF'],
  ['g', 'G', 'п', 'П', 'KeyG'],
  ['h', 'H', 'р', 'Р', 'KeyH'],
  ['j', 'J', 'о', 'О', 'KeyJ'],
  ['k', 'K', 'л', 'Л', 'KeyK'],
  ['l', 'L', 'д', 'Д', 'KeyL'],
  [';', ':', 'ж', 'Ж', 'Semicolon'],
  ['\'', '"', 'э', 'Э', 'Quote'],
  ['Enter', 'Enter'],
  ['Shift_Left', 'ShiftLeft'],
  ['z', 'Z', 'я', 'Я', 'KeyZ'],
  ['x', 'X', 'ч', 'Ч', 'KeyX'],
  ['c', 'C', 'с', 'С', 'KeyC'],
  ['v', 'V', 'м', 'М', 'KeyV'],
  ['b', 'B', 'и', 'И', 'KeyB'],
  ['n', 'N', 'т', 'Т', 'KeyN'],
  ['m', 'M', 'ь', 'Ь', 'KeyM'],
  [',', '<', 'б', 'Б', 'Comma'],
  ['.', '>', 'ю', 'Ю', 'Period'],
  ['&uarr;', 'ArrowUp'],
  ['/', '?', '.', ',', 'Slash'],
  ['Shift_Right', 'ShiftRight'],
  ['Ctrl_Left', 'ControlLeft'],
  ['Win', 'MetaLeft'],
  ['Alt_Left', 'AltLeft'],
  [' ', ' ', ' ', ' ', 'Space'],
  ['Alt_Right', 'AltRight'],
  ['&larr;', 'ArrowLeft'],
  ['&darr;', 'ArrowDown'],
  ['&rarr;', 'keyNumber'],
  ['Ctrl_Right', 'ControlRight'],
];

let isCtrl = false;
let isAlt = false;
let isCapsLock = false;
let carriage = 0;

const languageStorage = localStorage.getItem('languageStorage');
let letterCount = 0;

if ((languageStorage == null) || (languageStorage === 'english')) {
  letterCount = 0;
} else {
  letterCount = 4;
}

const container = document.createElement('div');
container.className = 'container';
document.getElementsByTagName('body')[0].append(container);

const textArea = document.createElement('textarea');
textArea.cols = '20';
textArea.rows = '11';
textArea.wrap = 'hard';
textArea.className = 'textarea';
textArea.id = 'textArea';
textArea.onblur = function onblurTextArea() {
  carriage = textArea.selectionEnd;
};
container.append(textArea);
textArea.focus();

function changeLanguage() {
  if ((letterCount === 0) || (letterCount === 2)) {
    document.getElementById('language').innerHTML = 'english';
    document.getElementById('change_info').innerHTML = 'Change language: Ctrl + Alt';
  } else if ((letterCount === 4) || (letterCount === 6)) {
    document.getElementById('language').innerHTML = 'русский';
    document.getElementById('change_info').innerHTML = 'Изменить язык: Ctrl + Alt';
  }
}

const bar = document.createElement('div');
bar.className = 'bar';
container.appendChild(bar);

const infoBar = document.createElement('div');
infoBar.className = 'info_bar';
bar.appendChild(infoBar);

const winInfo = document.createElement('span');
winInfo.className = 'win_info';
winInfo.innerHTML = 'Windows';
infoBar.appendChild(winInfo);

const changeInfo = document.createElement('span');
changeInfo.className = 'change_info';
changeInfo.id = 'change_info';
infoBar.appendChild(changeInfo);

const indicatorBar = document.createElement('div');
indicatorBar.className = 'indicator_bar';
bar.appendChild(indicatorBar);

const language = document.createElement('span');
language.className = 'language';
language.id = 'language';

indicatorBar.appendChild(language);
changeLanguage();

const indicatorButton = document.createElement('div');
indicatorButton.className = 'indicatorButton';
indicatorButton.id = 'indicatorButton';
indicatorButton.innerHTML = ' ';
indicatorBar.appendChild(indicatorButton);

const indicatorSpan = document.createElement('span');
indicatorSpan.className = 'indicatorSpan';
indicatorSpan.id = 'indicatorSpan';
indicatorSpan.innerHTML = 'Caps Lock';
indicatorBar.appendChild(indicatorSpan);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'KeyboardButton';
container.append(keyboard);

for (const item in buttonList) {
  const button = document.createElement('button');

  if (buttonList[item].length === 2) {
    button.innerHTML = buttonList[item][0];
    button.id = buttonList[item][0];
    button.className = 'buttonControl';

    const dataKey = buttonList[item][1];

    button.setAttribute('data-key', dataKey);

    const dataAction = buttonList[item][0].toString();

    if (dataAction[0] === '&') {
      const action = dataAction.slice(1, 5);

      button.setAttribute('data-action', action);
    } else {
      button.setAttribute('data-action', dataAction);
    }
  } else {
    const dataKey = buttonList[item][4];
    button.setAttribute('data-key', dataKey);
    const mass = buttonList[item];
    mass.pop();

    const str = mass.join(',');
    button.innerHTML = str[letterCount];
    button.className = 'button';

    button.setAttribute('data-action', 'Print');
    button.setAttribute('data-item', buttonList[item]);
  }
  keyboard.appendChild(button);
}

let selectButton;

function printLetter(eventButton) {
  if (selectButton) {
    selectButton.classList.remove('button_active');
  }
  selectButton = eventButton;
  selectButton.classList.add('button_active');
}

keyboard.addEventListener('mousedown', (event) => {
  const {
    target,
  } = event;

  if (target.tagName != 'BUTTON') {
    return;
  }

  printLetter(target);
  textArea.focus();
}, false);

function upButton(eventButton) {
  eventButton.classList.remove('button_active');
}

keyboard.addEventListener('mouseup', (event) => {
  const {
    target,
  } = event;

  if (target.tagName != 'BUTTON') {
    return;
  }

  upButton(target);
  textArea.focus();
}, false);


const simpleButton = document.getElementsByClassName('button');

class KeyboardButton {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  Print(event) {
    const mass = event.toElement.getAttribute('data-item');

    const strLength = textArea.value.length;
    carriage = textArea.selectionEnd;

    if (carriage === strLength) {
      textArea.value += mass[letterCount];
    } else {
      textArea.value = textArea.value.slice(0, carriage)
                + mass[letterCount] + textArea.value.slice(carriage);
    }

    textArea.focus();
    carriage += 1;
    textArea.selectionEnd = carriage;
  }

  Backspace() {
    const strLength = textArea.value.length;
    carriage = textArea.selectionEnd;

    if (carriage !== 0) {
      if (carriage === strLength) {
        textArea.value = textArea.value.slice(0, -1);
      } else {
        textArea.value = textArea.value.slice(0, carriage - 1)
                    + textArea.value.slice(carriage);
      }
    }

    textArea.focus();

    if (carriage < 1) {
      carriage = 0;
    } else {
      carriage -= 1;
    }

    textArea.selectionEnd = carriage;
  }

  Tab() {
    pressTab();
  }

  CapsLock() {
    lightCapsLock();
  }

  Enter() {
    const strLength = textArea.value.length;
    carriage = textArea.selectionEnd;

    if (carriage === strLength) {
      textArea.value += '\n';
    } else {
      textArea.value = `${textArea.value.slice(0, carriage)}\n${textArea.value.slice(carriage)}`;
    }

    textArea.focus();
    carriage += 1;
    textArea.selectionEnd = carriage;
  }

  Shift_Left() {}

  uarr() {
    /**
         * ширина символа данного шрифта и размера = 9px
         * вычисленно экспериментально: через ширину span с одним символом
         * и display: inline-block
         * вычисляем сколько символов поместится в одной строке
         * берём поле ввода, вычитаем padding'и и делим на ширину символа
         */
    const textAreaWidtn = (textArea.scrollWidth - 20) / 9;
    const str = textArea.value;
    carriage = textArea.selectionEnd;

    // проверяем были ли переносы строки
    const lineBreak = str.indexOf('\n');

    // проверяем сколько примерно строк, если без переносов
    const numberLines = textAreaWidtn < str.length;

    // если были переносы или содержимое больше чем ширина одной строки
    const objLines = [];
    let counterCarriage = 0;
    let subStrStart = 0;
    let subStrEnd = 0;
    let counterLines = 0;
    let carriageLines = 0;
    let carriageSymbol = 0;

    if ((lineBreak !== -1) || numberLines) {
      // делим на строки и находим курсор
      for (let counterStr = 0; counterStr < str.length; counterStr += 1) {
        if (counterStr === carriage) {
          carriageLines = counterLines - 1;
          carriageSymbol = counterCarriage;
        }

        counterCarriage += 1;

        // если встречается сивол новой строки, или строка шире чем поле, или конец строки
        if (str[counterStr] === '\n' || counterCarriage >= textAreaWidtn) {
          subStrEnd = counterStr + 1;
          objLines.push(str.slice(subStrStart, subStrEnd));
          subStrStart = counterStr + 1;
          counterLines += 1;
          counterCarriage = 0;
        }

        if (counterStr === (str.length - 1)) {
          objLines[counterLines] = str.slice(subStrStart);
        }
      }

      textArea.focus();
      textArea.selectionStart = carriage;
      textArea.selectionEnd = carriage;
    }
    let tempCount = 0;
    for (let i = 0; i < objLines.length; i += 1) {
      for (let j = 0; j < objLines[i].length; j += 1) {
        if (carriageLines === i && carriageSymbol === j) {
          carriage = tempCount;
        } else tempCount += 1;
      }
    }

    textArea.focus();

    textArea.selectionEnd = carriage;
    textArea.selectionStart = carriage;
  }

  Shift_Right() {}

  Ctrl_Left() {}

  Win() {}

  Alt_Right() {}

  Alt_Left() {}

  larr() {
    carriage = textArea.selectionEnd;
    textArea.focus();
    carriage -= 1;
    textArea.selectionEnd = carriage;
  }

  darr() {
    /**
         * ширина символа данного шрифта и размера = 9px
         * вычисленно экспериментально: через ширину span с одним символом
         * и display: inline-block
         * вычисляем сколько символов поместится в одной строке
         * берём поле ввода, вычитаем padding'и и делим на ширину символа
         */
    const textAreaWidtn = (textArea.scrollWidth - 20) / 9;
    const str = textArea.value;
    carriage = textArea.selectionEnd;

    // проверяем были ли переносы строки
    const lineBreak = str.indexOf('\n');

    // проверяем сколько примерно строк, если без переносов
    const numberLines = textAreaWidtn < str.length;

    // если были переносы или содержимое больше чем ширина одной строки
    const objLines = [];
    let counterCarriage = 0;
    let subStrStart = 0;
    let subStrEnd = 0;
    let counterLines = 0;
    let carriageLines = 0;
    let carriageSymbol = 0;

    if ((lineBreak !== -1) || numberLines) {
      // делим на строки и находим курсор
      for (let counterStr = 0; counterStr < str.length; counterStr += 1) {
        if (counterStr === carriage) {
          carriageLines = counterLines + 1;
          carriageSymbol = counterCarriage;
        }
        counterCarriage += 1;

        // если встречается сивол новой строки, или строка шире чем поле, или конец строки
        if (str[counterStr] === '\n' || counterCarriage >= textAreaWidtn) {
          subStrEnd = counterStr + 1;
          objLines.push(str.slice(subStrStart, subStrEnd));
          subStrStart = counterStr + 1;
          counterLines += 1;
          counterCarriage = 0;
        }

        if (counterStr === (str.length - 1)) {
          objLines[counterLines] = str.slice(subStrStart);
        }
      }

      textArea.focus();
      textArea.selectionEnd = carriage;
      textArea.selectionStart = carriage;
    }

    let tempCount = 0;
    for (let i = 0; i < objLines.length; i += 1) {
      for (let j = 0; j < objLines[i].length; j += 1) {
        if (carriageLines === i && carriageSymbol === j) {
          carriage = tempCount;
        } else tempCount += 1;
      }
    }

    textArea.focus();
    textArea.selectionEnd = carriage;
    textArea.selectionStart = carriage;
  }

  rarr() {
    carriage = textArea.selectionEnd;
    textArea.focus();
    carriage += 1;
    textArea.selectionStart = carriage;
    textArea.selectionEnd = carriage;
  }

  Ctrl_Right() {}


  onClick(event) {
    const {
      action,
    } = event.target.dataset;
    if (action) {
      this[action](event);
    }
  }
}

new KeyboardButton(keyboard);

const capsLock = document.getElementById('CapsLock');
const shiftLeft = document.getElementById('Shift_Left');
const shiftRight = document.getElementById('Shift_Right');
const ctrlLeft = document.getElementById('Ctrl_Left');
const ctrlRight = document.getElementById('Ctrl_Right');
const altLeft = document.getElementById('Alt_Left');
const altRight = document.getElementById('Alt_Right');

function pressTab() {
  const strLength = textArea.value.length;
  carriage = textArea.selectionEnd;

  if (carriage === strLength) {
    textArea.value += '    ';
  } else {
    textArea.value = `${textArea.value.slice(0, carriage)}    ${textArea.value.slice(carriage)}`;
  }

  textArea.focus();
  carriage += 4;
  textArea.selectionEnd = carriage;
}

function lightCapsLock() {
  const indicat = document.getElementById('indicatorButton');

  if (isCapsLock) {
    indicat.classList.remove('indicatorButton_active');
  } else {
    indicat.classList.add('indicatorButton_active');
  }

  isCapsLock = !isCapsLock;
}

function pressShift() {
  switch (letterCount) {
    case 0: {
      letterCount = 2;
      break;
    }
    case 2: {
      letterCount = 0;
      break;
    }
    case 4: {
      letterCount = 6;
      break;
    }
    case 6: {
      letterCount = 4;
      break;
    }
  }

  changeTitle();
}

function changeTitle() {
  for (let buttonIndex = 0; buttonIndex < simpleButton.length; buttonIndex++) {
    const action = simpleButton[buttonIndex].getAttribute('data-item');
    simpleButton[buttonIndex].innerHTML = action[letterCount];
  }
}

capsLock.addEventListener('click', pressShift, false);
shiftLeft.addEventListener('mousedown', pressShift, false);
shiftLeft.addEventListener('mouseup', pressShift, false);
shiftRight.addEventListener('mousedown', pressShift, false);
shiftRight.addEventListener('mouseup', pressShift, false);

function pressCtrl(event) {
  const idButton = event.target.id;
  const languageTitle = document.getElementById('language');

  if (idButton.includes('Ctrl')) {
    isCtrl = true;
  } else if (idButton.includes('Alt')) {
    isAlt = true;
  }

  if (isCtrl && isAlt) {
    switch (letterCount) {
      case 0: {
        letterCount = 4;
        localStorage.setItem('languageStorage', 'русский');
        break;
      }
      case 2: {
        letterCount = 6;
        localStorage.setItem('languageStorage', 'русский');
        break;
      }
      case 4: {
        letterCount = 0;
        localStorage.setItem('languageStorage', 'english');
        break;
      }
      case 6: {
        letterCount = 2;
        localStorage.setItem('languageStorage', 'english');
        break;
      }
    }
  }

  changeLanguage();

  changeTitle();

  isAlt = false;
  isCtrl = false;
}

function upCtrl(event) {
  const idButton = event.target.id;

  if (idButton.includes('Ctrl')) {
    isCtrl = false;
  } else if (idButton.includes('Alt')) {
    isAlt = false;
  }
}

ctrlLeft.addEventListener('mousedown', pressCtrl, false);
ctrlLeft.addEventListener('mouseup', upCtrl, false);
ctrlRight.addEventListener('mousedown', pressCtrl, false);
ctrlRight.addEventListener('mouseup', upCtrl, false);
altLeft.addEventListener('mousedown', pressCtrl, false);
altLeft.addEventListener('mouseup', upCtrl, false);
altRight.addEventListener('mousedown', pressCtrl, false);
altRight.addEventListener('mouseup', upCtrl, false);

const allButton = document.getElementsByTagName('button');

document.addEventListener('keydown', (event) => {
  const keyCode = event.code;

  let buttonAction;

  for (let buttonIndex = 0; buttonIndex < allButton.length; buttonIndex++) {
    buttonAction = allButton[buttonIndex].getAttribute('data-key');

    if (buttonAction == keyCode) {
      allButton[buttonIndex].classList.add('button_active');

      switch (buttonAction) {
        case 'Tab': {
          event.preventDefault();
          pressTab();
          break;
        }
        case 'CapsLock': {
          lightCapsLock();
          break;
        }
        case 'ShiftLeft':
        case 'ShiftRight': {
          pressShift();
          break;
        }
      }
    }
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyCode = event.code;

  for (let buttonIndex = 0; buttonIndex < allButton.length; buttonIndex++) {
    const buttonAction = allButton[buttonIndex].getAttribute('data-key');

    if (buttonAction == keyCode) {
      allButton[buttonIndex].classList.remove('button_active');

      if (buttonAction == 'ControlLeft' || buttonAction == 'ControlRight') {
        isCtrl = true;
      }

      if (buttonAction == 'AltLeft' || buttonAction == 'AltRight') {
        isAlt = true;
      }
    }
  }

  if (isAlt && isCtrl) {
    switch (letterCount) {
      case 0: {
        letterCount = 4;
        localStorage.setItem('languageStorage', 'русский');
        break;
      }
      case 2: {
        letterCount = 6;
        localStorage.setItem('languageStorage', 'русский');
        break;
      }
      case 4: {
        letterCount = 0;
        localStorage.setItem('languageStorage', 'english');
        break;
      }
      case 6: {
        letterCount = 2;
        localStorage.setItem('languageStorage', 'english');
        break;
      }
    }
    changeLanguage();

    changeTitle();
    isCtrl = false;
    isAlt = false;
  }
}, false);

function pressCtrlKey(buttonAction) {
  if (buttonAction.includes('Ctrl')) {
    isCtrl = true;
  } else if (buttonAction.includes('Alt')) {
    isAlt = true;
  }

  if (isCtrl && isAlt) {
    switch (letterCount) {
      case 0: {
        letterCount = 4;
        localStorage.setItem('languageStorage', 'русский');
        break;
      }
      case 2: {
        letterCount = 6;
        localStorage.setItem('languageStorage', 'русский');
        break;
      }
      case 4: {
        letterCount = 0;
        localStorage.setItem('languageStorage', 'english');
        break;
      }
      case 6: {
        letterCount = 2;
        localStorage.setItem('languageStorage', 'english');
        break;
      }
    }
  }

  changeLanguage();

  changeTitle();
}
