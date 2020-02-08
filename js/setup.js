'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/**
 * Returns a random number
 * @param {number} min - min number of range
 * @param {number} max - max number of range
 * @returns {number} integer number
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createWizard() {
  return {
    name: wizardNames[getRandomInt(0, wizardNames.length - 1)] + ' ' + wizardSurnames[getRandomInt(0, wizardSurnames.length - 1)],
    coatColor: coatColor[getRandomInt(0, coatColor.length - 1)],
    eyesColor: eyesColor[getRandomInt(0, eyesColor.length - 1)]
  };
}

function createWizards() {
  var wizardsList = [];
  for (var i = 0; i < WIZARDS_NUMBER; ++i) {
    wizardsList.push(createWizard());
  }
  return wizardsList;
}

var wizards = createWizards();


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// домашка часть 2
// функции открытия и закрытия
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  if (document.querySelector(!input.focus())) {
    setup.removeClass('hidden');
  }
};

// открытие и закрытие по клику
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

// открытие и закрытие по нажатию на клавишу при наведении через клавиатуру
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

// валидатор
// userNameInput.addEventListener('invalid', function () {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   }
// });

userNameInput.addEventListener('change', function (evt) {
  var target = evt.target;
  if (target.value.length >= MAX_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять максимум из ' + MAX_NAME_LENGTH + 'символов');
  } else if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// смена цвета мантии
var colorCoat = document.querySelector('.setup-wizard .wizard-coat');
colorCoat.addEventListener('click', function () {
  colorCoat.style.fill = coatColor[getRandomInt(0, coatColor.length)];
});

// смена цвета глаз
var colorEyes = document.querySelector('.setup-wizard .wizard-eyes');
colorEyes.addEventListener('click', function () {
  colorEyes.style.fill = eyesColor[getRandomInt(0, eyesColor.length)];
});

// смена цвета шара
var colorBall = document.querySelector('.setup-fireball-wrap');
colorBall.addEventListener('click', function () {
  colorBall.style.backgroundColor = fireballColor[getRandomInt(0, fireballColor.length)];
  colorBall.setAttribute('value', fireballColor[getRandomInt(0, fireballColor.length)]);
});
