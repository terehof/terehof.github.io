var app=app||{};app.main={init:function(){this.events()},events:function(){console.log("test")}};var App=function(n,i){function t(){i.main.init()}return{init:t}}(jQuery,app);$(function(){App.init()});