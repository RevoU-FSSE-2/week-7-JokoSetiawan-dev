const financeForm = document.getElementById("finance-form") as HTMLFormElement;

financeForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  let formType = (document.getElementById("type") as HTMLInputElement).value;
  let formName = (document.getElementById("name") as HTMLInputElement).value;
  let formDetail = (document.getElementById("detail") as HTMLInputElement).value;
  let formAmount = (document.getElementById("amount") as HTMLInputElement).value;

  const cashResult = (document.getElementById("cash-result") as HTMLElement)
  cashResult.innerHTML += `
  <ul id="cash-result">
        <li>
          <h3>${formType}</h3>
          <p>Anda telah ${formName} sebesar Rp.${formAmount} untuk ${formDetail} </p>
        </li>
      </ul>
  
  `
});


