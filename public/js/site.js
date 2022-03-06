function downloadPDF() {
  const a = document.createElement("a");
  a.download = true;
  a.target = "_blank";
  a.href =
    "https://mcusercontent.com/0fba375f679515aa0ce8e8a53/files/d30afbd8-d245-1071-b8bd-c8f966cc6cbf/Inglês_Para_Pessoas_Inteligentes.pdf";

  a.click();
}

function checkDisplayButton() {
  const name = document.querySelector("#mce-MMERGE6");
  const tel = document.querySelector("#mce-PHONE");
  const email = document.querySelector("#mce-EMAIL");
  const select = document.querySelector("#mce-MMERGE7");

  const submit = document.querySelector("#mc-embedded-subscribe");

  if (
    name.value !== "" &&
    tel.value !== "" &&
    email.value !== "" &&
    select.value !== ""
  ) {
    console.log("if");
    submit.removeAttribute("disabled")
  } else {
    console.log("else");
    submit.setAttribute("disabled", true);
  }
}

checkDisplayButton();
