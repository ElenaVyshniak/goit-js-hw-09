!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=null;e.addEventListener("click",(function(){a=setInterval((function(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(a),e.disabled=!1})),n.disabled=!0}();
//# sourceMappingURL=01-color-switcher.01baa1d2.js.map