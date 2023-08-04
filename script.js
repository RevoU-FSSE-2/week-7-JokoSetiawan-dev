"use strict";
const finance = document.querySelector(".finance-form");
const typeForm = document.getElementById("type");
const nameForm = document.getElementById("name");
const detailForm = document.getElementById("detail");
const amountForm = document.getElementById("amount");
finance.addEventListener("submit", () => {
    let formValues;
    formValues = [nameForm.value, detailForm.value, amountForm.valueAsNumber];
});
const nameValue = nameForm.value;
const detailValue = detailForm.value;
const amountValue = amountForm.valueAsNumber;
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function () {
    const cashResult = document.querySelector("#cash-result");
    let cashBox = cashResult.innerHTML;
    let newCashBox = `
        <ul>
          <li>
            <h3></h3>
            <p>Anda telah ${nameValue} sebesar ${amountValue} untuk ${detailValue}</p>
          </li>
        </ul>
    `;
    cashBox += newCashBox;
    cashResult.innerHTML = cashBox;
});
