const financeForm: HTMLFormElement = document.getElementById(
  "finance-form"
) as HTMLFormElement;

financeForm?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let formType: string = (document.getElementById("type") as HTMLInputElement)
    .value;
  let formName: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  let formDetail: string = (
    document.getElementById("detail") as HTMLInputElement
  ).value;
  let formAmount: string = (
    document.getElementById("amount") as HTMLInputElement
  ).value;

  if (formType === "" || formType === null) {
    forAlert("The Type Form");
  }
  if (formName === "" || formType === null) {
    forAlert("The Name Form");
  }
  if (formDetail === "" || formType === null) {
    forAlert("The Detail Form");
  }
  if (formAmount === "" || formType === null) {
    forAlert("The Amount Form");
  } else {
    const cashResult: HTMLElement = document.getElementById(
      "cash-result"
    ) as HTMLElement;
    cashResult.innerHTML += `
  <ul id="cash-result">
        <li>
          <h3>${formType}</h3>
          <p>Anda telah ${formName} sebesar Rp.${formAmount} untuk ${formDetail} </p>
        </li>
      </ul>  
  `;
  }

  function forAlert(inputElement: string): void{
    alert(inputElement + " Cant Be Empety");
  }
});
