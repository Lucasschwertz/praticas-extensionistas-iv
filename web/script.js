document.getElementById("btnApi").addEventListener("click", async () => {
    try {
        const resposta = await fetch("https://praticas-extensionistas-iv.onrender.com/dados");
        const dados = await resposta.json();
        document.getElementById("resultadoApi").innerText = "API retornou: " + dados.mensagem;
    } catch (err) {
        document.getElementById("resultadoApi").innerText = "Erro ao chamar API";
    }
});
