'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 130;
var TEXT_Y = 50;
var GAP = 50;
var FONT_GAP = 10;
var TEXT_WIDTH = 20;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + 20);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// var blueColor = function getColor(){
//     return "hsl(" + 250 * Math.random() + ',' +
//                (25 + 70 * Math.random()) + '%,' +
//                (85 + 10 * Math.random()) + '%)'
// };

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  // ctx.rotate(1.5 * Math.PI);

  renderText(ctx);
  ctx.fillStyle = '#000';


  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === "Вы"){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'blue';
    };
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + TEXT_WIDTH, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.strokeText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + barHeight + GAP);
  }

};
