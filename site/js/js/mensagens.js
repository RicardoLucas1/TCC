function verificarSenha(senha) {
    const resultado = document.getElementById("resultadoSenha");

    if (senha === "M4r!@2024") {
        resultado.innerHTML = "✅ Muito bem! Essa é uma senha forte!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Essa senha é fraca! Tente outra.";
        resultado.style.color = "red";
    }
}

function respostaMensagem(tipo) {
    const resultado = document.getElementById("resultadoMensagem");

    if (tipo === "certo") {
        resultado.innerHTML = "✅ Correto! Nunca envie sua senha!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Errado! Nunca compartilhe sua senha!";
        resultado.style.color = "red";
    }
}

function respostaInfo(seguro) {
    const resultado = document.getElementById("resultadoInfo");

    if (seguro) {
        resultado.innerHTML = "✅ Isso mesmo! Não compartilhe informações pessoais!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Cuidado! Informações pessoais devem ser protegidas!";
        resultado.style.color = "red";
    }
}