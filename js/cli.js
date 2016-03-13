var pingPong = require("./ping-pong.js").pingPong;

var goal = prompt("What number shall I ping pong up to?");
var result = pingPong(goal);
result.forEach(function(element){
  console.log(element);
});
