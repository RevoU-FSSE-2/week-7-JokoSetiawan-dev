const finance = document.querySelector(".finance-form") as HTMLDivElement;

const typeForm = document.getElementById("type") as HTMLOptionElement;
const nameForm = document.getElementById("name") as HTMLInputElement;
const detailForm = document.getElementById("detail") as HTMLInputElement;
const amountForm = document.getElementById("amount") as HTMLInputElement;


finance.addEventListener("submit", () => {
  let formValues;
  formValues = [nameForm.value, detailForm.value, amountForm.valueAsNumber];
});

const nameValue = nameForm.value;
const detailValue = detailForm.value
const amountValue = amountForm.valueAsNumber

const submitBtn = (document.querySelector(".submit-btn") as HTMLButtonElement)
submitBtn.addEventListener("click", function() {
    const cashResult = (document.querySelector("#cash-result") as HTMLDataElement)
    let cashBox = cashResult.innerHTML
    let newCashBox = `
        <ul>
          <li>
            <h3></h3>
            <p>Anda telah ${nameValue} sebesar ${amountValue} untuk ${detailValue}</p>
          </li>
        </ul>
    `
    cashBox += newCashBox
    cashResult.innerHTML = cashBox
})
