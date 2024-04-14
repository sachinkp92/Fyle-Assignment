let grossInputErr = document.getElementById("grossInputErr");
let extraIncomeInputErr = document.getElementById("extraIncomeInputErr");
let ageInputErr = document.getElementById("ageInputErr");
let deductionInputErr = document.getElementById("deductionInputErr");
let myFormEl = document.getElementById("myForm");
let resultContainerEl = document.getElementById("resultContainer");
let closeBtnEl = document.getElementById("closeBtn");
let grossInputEl = document.getElementById("grossInput");
let extraIncome = document.getElementById("extraIncome");
let ageEl = document.getElementById("age");
let deductionEl = document.getElementById("deduction");
let btnEl = document.getElementById("btn");
let resultEl = document.getElementById("result");

var ageValue;
let extraIncomeValue = 0;
let deductionValue = 0;

ageEl.addEventListener("change", function (event) {
  ageValue = event.target.value;
});

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  let grossIncomeValue = Number(grossInputEl.value);
  extraIncomeValue = Number(extraIncome.value);
  // let ageValue = Number(ageEl.value);
  let deductionValue = Number(deductionEl.value);
  let totalIncome = grossIncomeValue + extraIncomeValue - deductionValue;

  if (grossInputEl.value === "") {
    grossInputErr.textContent = "*Please enter number only";
    return;
  } else {
    grossInputErr.textContent = "";
  }
  if (extraIncome.value === "") {
    extraIncomeInputErr.textContent = "*Please enter number only";
    return;
  } else {
    extraIncomeInputErr.textContent = "";
  }
  if (ageValue === undefined) {
    ageInputErr.textContent = "*Please select age";
    return;
  } else {
    ageInputErr.textContent = "";
  }
  if (deductionEl.value === "") {
    deductionInputErr.textContent = "*Please enter number only";
    return;
  } else {
    deductionInputErr.textContent = "";
  }

  if (!grossIncomeValue || !extraIncomeValue || !deductionValue) {
    resultContainerEl.style.display = "none";
  }
  if (
    grossIncomeValue ||
    extraIncomeValue ||
    (deductionValue && totalIncome <= 800000)
  ) {
    totalIncome = grossIncomeValue + extraIncomeValue - deductionValue;
    resultContainerEl.style.display = "block";
    resultContainerEl.innerHTML = `<p id="result">
     Your overall income will be ${totalIncome}
     <br />
    after tax deductions
  </p>
  <button class="btn-close" id="closeBtn">Close</button>`;
  }
  if (
    grossIncomeValue ||
    extraIncomeValue ||
    (deductionValue && totalIncome > 800000 && ageValue < 40)
  ) {
    totalIncome = grossIncomeValue + extraIncomeValue - deductionValue - 800000;
    totalIncome = totalIncome * 0.3;
    resultContainerEl.style.display = "block";
    resultContainerEl.innerHTML = `<p id="result">
       Your overall income will be ${totalIncome}
       <br />
      after tax deductions
    </p>
    <button class="btn-close" id="closeBtn">Close</button>`;
  }
  if (
    grossIncomeValue ||
    extraIncomeValue ||
    (deductionValue && totalIncome > 800000 && ageValue >= 40)
  ) {
    totalIncome = grossIncomeValue + extraIncomeValue - deductionValue - 800000;
    totalIncome = totalIncome * 0.3;
    resultContainerEl.style.display = "block";
    resultContainerEl.innerHTML = `<p id="result">
       Your overall income will be ${totalIncome}
       <br />
      after tax deductions
    </p>
    <button class="btn-close" id="closeBtn">Close</button>`;
  }
  if (
    grossIncomeValue ||
    extraIncomeValue ||
    (deductionValue && totalIncome > 800000 && ageValue > 60)
  ) {
    totalIncome = grossIncomeValue + extraIncomeValue - deductionValue - 800000;
    totalIncome = totalIncome * 0.3;
    resultContainerEl.style.display = "block";
    resultContainerEl.innerHTML = `<p id="result">
       Your overall income will be ${totalIncome}
       <br />
      after tax deductions
    </p>
    <button class="btn-close" id="closeBtn">Close</button>`;
  }
});

closeBtnEl.onclick = function () {
  resultContainerEl.style.display = "none";
};
