"use strict";var billInput,billTag=document.querySelector(".bill"),percentsTags=document.querySelectorAll(".pg"),zeroTag=document.querySelector("#percent__zero"),peopleInputTag=document.querySelector(".percent__label--inpu"),customTag=document.querySelector(".percent__grid--inpu"),dpr=function(){zeroTag.classList.add("dpr"),peopleInputTag.classList.add("dpr")},dprr=function(){zeroTag.classList.contains("dpr")&&(zeroTag.classList.remove("dpr"),peopleInputTag.classList.remove("dpr"))},disablePerTagsAndPeopleInput=function(){percentsTags.forEach((function(e){e.classList.contains("clicked")&&e.classList.remove("clicked"),e.disabled=!0})),customTag.value="",peopleInputTag.disabled=!0};billTag.addEventListener("keyup",(function(){0!==billTag.value.length?(peopleInputTag.value="",disablePerTagsAndPeopleInput(),reset(),billInput=parseInt(billTag.value),percentsTags.forEach((function(e){e.disabled=!1}))):(peopleInputTag.value="",disablePerTagsAndPeopleInput(),reset(),dprr())}));var per,removeClick=function(){percentsTags.forEach((function(e){e.classList.contains("clicked")&&e.classList.remove("clicked")}))};percentsTags.forEach((function(e){"submit"===e.type?e.addEventListener("click",(function(e){0!==billTag.value.length&&(removeClick(),per=parseInt(e.target.dataset.per),e.target.classList.add("clicked"),dpr(),peopleInputTag.disabled=!1,customTag.value=""),0!==peopleInputTag.value.length&&(console.log("hi"),reset())})):e.addEventListener("keyup",(function(){removeClick(),per=parseInt(e.value),dpr(),peopleInputTag.disabled=!1,0!==peopleInputTag.value.length&&(reset(),peopleInputTag.disabled=!0),0===customTag.value.length?(reset(),peopleInputTag.disabled=!0):peopleInputTag.disabled=!1}))}));var tipAmountTag=document.querySelector(".tip_amount"),totalTag=document.querySelector(".tip_a_person"),resetBtnTag=document.querySelector(".ss__reset"),tipCalculator=function(e,t){var a=billInput*(e/100),n=a/parseInt(t),l=(billInput+a)/parseInt(t);tipAmountTag.textContent="$".concat(n.toFixed(3)),totalTag.textContent="$".concat(l.toFixed(3)),resetBtnTag.disabled=!1};peopleInputTag.addEventListener("keyup",(function(e){0!==peopleInputTag.value.length&&0!==parseInt(peopleInputTag.value)?(dprr(),tipCalculator(per,e.target.value)):(dpr(),reset())}));var reset=function(){tipAmountTag.textContent="$0.00",totalTag.textContent="$0.00",resetBtnTag.disabled=!0,peopleInputTag.value=""};resetBtnTag.addEventListener("click",(function(){billTag.value="",disablePerTagsAndPeopleInput(),reset()}));
//# sourceMappingURL=script.js.map