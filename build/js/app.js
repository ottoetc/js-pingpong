!function n(e,o,r){function t(u,p){if(!o[u]){if(!e[u]){var f="function"==typeof require&&require;if(!p&&f)return f(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=o[u]={exports:{}};e[u][0].call(c.exports,function(n){var o=e[u][1][n];return t(o?o:n)},c,c.exports,n,e,o,r)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)t(r[u]);return t}({1:[function(n,e,o){o.pingPong=function(n){for(var e=[],o=1;n>=o;o++)o%15===0?e.push("ping-pong"):o%3===0?e.push("ping"):o%5===0?e.push("pong"):e.push(o);return e}},{}],2:[function(n,e,o){var r=n("./../js/ping-pong.js").pingPong;$(document).ready(function(){$("#ping-pong").submit(function(n){n.preventDefault();var e=$("#goal").val(),o=r(e);o.forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var e=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+e+" has been added to our list!</p>")})}),$(document).ready(function(){$("#time").text(moment())})},{"./../js/ping-pong.js":1}]},{},[2]);