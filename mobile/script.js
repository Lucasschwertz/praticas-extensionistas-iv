document.getElementById("btnApi").addEventListener("click", async () => {

    const result = document.getElementById("resultadoApi");
    result.innerText = "Conectando à API...";

    try {
        const resposta = await fetch("https://praticas-extensionistas-iv.onrender.com/dados");
        const dados = await resposta.json();

        result.innerText = "Resposta da API: " + dados.mensagem;
    } catch (erro) {
        result.innerText = "Erro ao acessar API (Render pode estar acordando)";
    }
});
