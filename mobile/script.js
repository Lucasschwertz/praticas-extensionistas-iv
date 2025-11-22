document.getElementById("btn-api").addEventListener("click", async () => {
    try {
        const resposta = await fetch("https://praticas-extensionistas-iv.onrender.com/dados");
        const dados = await resposta.json();
        document.getElementById("resultado").innerText = "API retornou: " + dados.mensagem;
    } catch (error) {
        document.getElementById("resultado").innerText = "Erro ao acessar API";
    }
});
