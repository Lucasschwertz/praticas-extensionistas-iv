// URL da API hospedada no Render
const API_BASE = "https://praticas-api.onrender.com";

// Elementos da interface
const btnApi = document.getElementById("btn-api");
const resultado = document.getElementById("resultado");

// Evento de clique no botão
btnApi.addEventListener("click", async () => {
    resultado.textContent = "Consultando a API...";

    try {
        const resp = await fetch(API_BASE + "/dados");
        
        if (!resp.ok) {
            resultado.textContent = "Erro: API retornou status " + resp.status;
            return;
        }

        const data = await resp.json();
        resultado.textContent = JSON.stringify(data, null, 2);

    } catch (erro) {
        resultado.textContent = "Erro ao conectar com a API: " + erro;
    }
});
