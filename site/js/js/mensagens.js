function verificarSenha(senha) {
  const resultado = document.getElementById("resultadoSenha");

  if (senha === "M4r!@2024") {
    resultado.textContent = "✅ Muito bem! Essa é uma senha forte!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Essa senha é fraca!";
    resultado.style.color = "red";
  }
}

function respostaMensagem(resposta) {
  const resultado = document.getElementById("resultadoMensagem");

  if (resposta === "certo") {
    resultado.textContent = "✅ Correto! Nunca compartilhe sua senha.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Errado! Não envie sua senha.";
    resultado.style.color = "red";
  }
}

function respostaInfo(seguro) {
  const resultado = document.getElementById("resultadoInfo");

  if (seguro) {
    resultado.textContent = "✅ Isso mesmo! Não compartilhe informações pessoais.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Cuidado! Não é seguro compartilhar endereço.";
    resultado.style.color = "red";
  }
}