const API_URL = "https://praticas-api.onrender.com/dados";

document.addEventListener("DOMContentLoaded", () => {
    // Splash desaparece depois de 1.5s
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";

        document.querySelectorAll(".hidden").forEach(el => {
            el.style.display = "block";
        });
    }, 1500);

    // Verificação automática da API
    const statusEl = document.getElementById("apiStatus");

    fetch(API_URL)
        .then(r => r.ok ? "Online" : "Offline")
        .then(status => {
            statusEl.textContent = status;
            statusEl.style.color = status === "Online" ? "#7cb97c" : "#d96e54";
        })
        .catch(() => {
            statusEl.textContent = "Offline";
            statusEl.style.color = "#d96e54";
        });
});

// Botão flutuante da API
document.getElementById("btnApi").addEventListener("click", async () => {
    const output = document.getElementById("resultadoApi");
    output.textContent = "Consultando API...";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = "Erro ao consultar API.";
    }
});
