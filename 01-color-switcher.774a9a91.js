!function(){var e=document.querySelector(".js-start"),n=document.querySelector(".js-stop"),t=null;e.addEventListener("click",(function(){t=setInterval((function(){console.log("I love async JS!  ".concat(Math.random()))}),1e3)})),n.addEventListener("click",(function(){clearInterval(t),console.log("Interval with id ".concat(t," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.774a9a91.js.map