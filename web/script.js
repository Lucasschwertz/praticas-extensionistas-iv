document.getElementById("btn-api").addEventListener("click", async () => {

    const resBox = document.getElementById("resultado");
    resBox.innerText = "Conectando ao servidor...";

    try {
        const resposta = await fetch("https://praticas-extensionistas-iv.onrender.com/dados");
        const dados = await resposta.json();

        resBox.innerText = "Resposta da API: " + dados.mensagem;

    } catch (err) {
        resBox.innerText = "A API demorou ou está acordando no Render...";
    }
});
