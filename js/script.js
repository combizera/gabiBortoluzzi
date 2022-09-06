const btnMobile = document.getElementById("btn__mobile");
function toggleMenu(a) {
  "touchstart" === a.type && a.preventDefault();
  let b = document.getElementById("header__nav");
  b.classList.toggle("active");
  let c = b.classList.contains("active");
  a.currentTarget.setAttribute("aria-expanded", c),
    c
      ? a.currentTarget.setAttribute("aria-label", "Fechar Menu")
      : a.currentTarget.setAttribute("aria-label", "Abrir Menu");
}
btnMobile.addEventListener("click", toggleMenu),
  btnMobile.addEventListener("touchstart", toggleMenu);

// Formulario NewsLetter
const form = document.querySelector("#home-form-news");

function formEnviado(resposta) {
  if (resposta.ok) {
    form.innerHTML =
      "<p style='padding: 1rem;border-radius:4px;background:#E3E3E3'><span style='color:#317a00;'>Inscrição realizada com sucesso!</span> Muito obrigado.</p>";
  } else {
    form.innerHTML =
      "<p style='padding: 1rem;border-radius:4px;background:#E3E3E3'><span style='color:#e00000;'>Erro no envio!</span> Contate-nos, via atendimento@bortoluzziadvocacia.com.br</p>";
  }
}

function enviarForm(event) {
  event.preventDefault();
  const botao = document.querySelector("#home-form-news button");
  botao.disable = true;
  botao.innerText = "Enviando...";

  const data = new FormData(form);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formEnviado);
}

form.addEventListener("submit", enviarForm);

// Formulário Mensagem
const form2 = document.querySelector("#home-form-mensagem");

function formEnviado(resposta) {
  if (resposta.ok) {
    form2.innerHTML =
      "<p style='padding: 1rem;border-radius:4px;background:#E3E3E3'><span style='color:#317a00;'>Mensagem enviada com sucesso!</span> Em breve responderemos.</p>";
  } else {
    form2.innerHTML =
      "<p style='padding: 1rem;border-radius:4px;background:#E3E3E3'><span style='color:#e00000;'>Erro no envio!</span> Contate-nos, via atendimento@bortoluzziadvocacia.com.br</p>";
  }
}

function enviarForm(event) {
  event.preventDefault();
  const botao = document.querySelector("#home-form-news button");
  botao.disable = true;
  botao.innerText = "Enviando...";

  const data = new FormData(form2);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formEnviado);
}

form2.addEventListener("submit", enviarForm);
