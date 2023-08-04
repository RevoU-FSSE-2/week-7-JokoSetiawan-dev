"use strict";
const financeForm = document.getElementById("finance-form");
financeForm === null || financeForm === void 0 ? void 0 : financeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formType = document.getElementById("type").value;
    let formName = document.getElementById("name").value;
    let formDetail = document.getElementById("detail").value;
    let formAmount = document.getElementById("amount").value;
    const cashResult = document.getElementById("cash-result");
    cashResult.innerHTML += `
  <ul id="cash-result">
        <li>
          <h3>${formType}</h3>
          <p>Anda telah ${formName} sebesar Rp.${formAmount} untuk ${formDetail} </p>
        </li>
      </ul>
  
  `;
});
