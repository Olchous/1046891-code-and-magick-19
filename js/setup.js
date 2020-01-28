'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
   .content
   .querySelector('.setup-similar-item');

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
  var wizards = [];
  for (var i = 0; i <= WIZARDS_NUMBER; i++) {
    wizards.push(createWizard());
  }
  return wizards;
}

console.log(createWizards());

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
