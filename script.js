// Encontrando o espaço que separamos no HTML
const sistemaRural = document.getElementById('sistema-rural');

// Criando o nosso botão de irrigação
sistemaRural.innerHTML = `
    <br>
    <button id="botao-irrigacao" style="background-color: #4caf50; color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 5px; cursor: pointer;">
        Ligar Irrigação Sustentável 💧
    </button>
    <p id="mensagem" style="margin-top: 15px; font-weight: bold;"></p>
`;

// Ensinando o botão o que ele deve fazer quando for clicado
const botao = document.getElementById('botao-irrigacao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    mensagem.style.color = "#2e7d32";
    mensagem.innerHTML = "Irrigação ligada! 🚿 Utilizando água da chuva armazenada para cuidar da nossa plantação e do meio ambiente.";
    botao.style.backgroundColor = "#81c784";
    botao.innerText = "Irrigando... 🌱";
});
