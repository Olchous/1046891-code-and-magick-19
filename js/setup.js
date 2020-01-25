'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
   .content
   .querySelector('.setup-similar-item');

// var wizards = [
//   {
//     name: wizardNames[Math.random() * wizardNames.length] + wizardSurnames[Math.random() * wizardSurnames.length],
//     coatColor: coatColor[Math.random() * coatColor.lenght],
//     eyesColor: eyesColor[Math.random() * eyesColor.lenght]
//   },
//   {
//     name: wizardNames[Math.random() * wizardNames.length] + wizardSurnames[Math.random() * wizardSurnames.length],
//     coatColor: coatColor[Math.random() * coatColor.lenght],
//     eyesColor: eyesColor[Math.random() * eyesColor.lenght]
//   },
//   {
//     name: wizardNames[Math.random() * wizardNames.length] + wizardSurnames[Math.random() * wizardSurnames.length],
//     coatColor: coatColor[Math.random() * coatColor.lenght],
//     eyesColor: eyesColor[Math.random() * eyesColor.lenght]
//   },
//   {
//     name: wizardNames[Math.random() * wizardNames.length] + wizardSurnames[Math.random() * wizardSurnames.length],
//     coatColor: coatColor[Math.random() * coatColor.lenght],
//     eyesColor: eyesColor[Math.random() * eyesColor.lenght]
//   }
// ];

var wizards = [
  {
    name: wizardNames[Math.floor(Math.random()) * wizardNames.length] + ' ' + wizardSurnames[Math.floor(Math.random()) * wizardSurnames.length],
    coatColor: coatColor[0],
    eyesColor: eyesColor[0]
  },
  {
    name: wizardNames[0] + wizardSurnames[0],
    coatColor: coatColor[0],
    eyesColor: eyesColor[0]
  },
  {
    name: wizardNames[0] + wizardSurnames[0],
    coatColor: coatColor[0],
    eyesColor: eyesColor[0]
  },
  {
    name: wizardNames[0] + wizardSurnames[0],
    coatColor: coatColor[0],
    eyesColor: eyesColor[0]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
