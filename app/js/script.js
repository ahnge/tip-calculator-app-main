const billTag = document.querySelector(".bill");
const percentsTags = document.querySelectorAll(".pg");

const zeroTag = document.querySelector("#percent__zero");
const peopleInputTag = document.querySelector(".percent__label--inpu");

const customTag = document.querySelector(".percent__grid--inpu");

const dpr = () => {
  zeroTag.classList.add("dpr");
  peopleInputTag.classList.add("dpr");
};

const dprr = () => {
  if (zeroTag.classList.contains("dpr")) {
    zeroTag.classList.remove("dpr");
    peopleInputTag.classList.remove("dpr");
  }
};

const disablePerTagsAndPeopleInput = () => {
  percentsTags.forEach((btn) => {
    if (btn.classList.contains("clicked")) {
      btn.classList.remove("clicked");
    }
    btn.disabled = true;
  });
  customTag.value = "";
  peopleInputTag.disabled = true;
};

let billInput;
billTag.addEventListener("keyup", () => {
  if (billTag.value.length !== 0) {
    peopleInputTag.value = "";
    disablePerTagsAndPeopleInput();
    reset();
    billInput = parseInt(billTag.value);
    percentsTags.forEach((btn) => {
      btn.disabled = false;
    });
  } else {
    peopleInputTag.value = "";
    disablePerTagsAndPeopleInput();
    reset();
    dprr();
  }
});

const removeClick = () => {
  percentsTags.forEach((btn) => {
    if (btn.classList.contains("clicked")) {
      btn.classList.remove("clicked");
    }
  });
};

let per;
percentsTags.forEach((btn) => {
  if (btn.type === "submit") {
    btn.addEventListener("click", (e) => {
      if (billTag.value.length !== 0) {
        removeClick();
        per = parseInt(e.target.dataset.per);
        e.target.classList.add("clicked");
        dpr();
        peopleInputTag.disabled = false;
        customTag.value = "";
      }
      if (peopleInputTag.value.length !== 0) {
        console.log("hi");
        reset();
      }
    });
  } else {
    btn.addEventListener("keyup", () => {
      removeClick();
      per = parseInt(btn.value);
      dpr();
      peopleInputTag.disabled = false;
      if (peopleInputTag.value.length !== 0) {
        reset();
        peopleInputTag.disabled = true;
      }
      if (customTag.value.length === 0) {
        reset();
        peopleInputTag.disabled = true;
      } else {
        peopleInputTag.disabled = false;
      }
    });
  }
});

const tipAmountTag = document.querySelector(".tip_amount");
const totalTag = document.querySelector(".tip_a_person");

const resetBtnTag = document.querySelector(".ss__reset");

const tipCalculator = (percent, people) => {
  const tipAmount = billInput * (percent / 100);
  const tipAmoutPerPerson = tipAmount / parseInt(people);
  const totalPerPerson = (billInput + tipAmount) / parseInt(people);
  tipAmountTag.textContent = `$${tipAmoutPerPerson.toFixed(3)}`;
  totalTag.textContent = `$${totalPerPerson.toFixed(3)}`;
  resetBtnTag.disabled = false;
};

peopleInputTag.addEventListener("keyup", (e) => {
  if (
    peopleInputTag.value.length !== 0 &&
    parseInt(peopleInputTag.value) !== 0
  ) {
    dprr();
    tipCalculator(per, e.target.value);
  } else {
    dpr();
    reset();
  }
});

const reset = () => {
  tipAmountTag.textContent = `$0.00`;
  totalTag.textContent = `$0.00`;
  resetBtnTag.disabled = true;
  peopleInputTag.value = "";
};

resetBtnTag.addEventListener("click", () => {
  billTag.value = "";
  disablePerTagsAndPeopleInput();
  reset();
});
