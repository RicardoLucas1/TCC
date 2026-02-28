function verificarResposta(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta) {
    resultado.innerText = "✅ Correto! É um golpe.";
  } else {
    resultado.innerText = "❌ Errado! Essa mensagem é suspeita.";
  }
}
