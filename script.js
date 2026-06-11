// Valores médios simplificados de emissão para fins educativos
// Diesel: ~2.68 kg CO2 por litro
// Fertilizante (Nitrogenado): ~1.5 kg CO2 por kg
// Energia Elétrica (Brasil): ~0.085 kg CO2 por kWh

document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    // Coleta os valores digitados
    const diesel = parseFloat(document.getElementById('diesel').value) || 0;
    const fertilizer = parseFloat(document.getElementById('fertilizer').value) || 0;
    const energy = parseFloat(document.getElementById('energy').value) || 0;

    // Calcula as emissões
    const emissaoDiesel = diesel * 2.68;
    const emissaoFertilizante = fertilizer * 1.5;
    const emissaoEnergia = energy * 0.085;

    const totalEmissao = emissaoDiesel + emissaoFertilizante + emissaoEnergia;

    // Exibe o resultado na tela
    const areaResultado = document.getElementById('resultado');
    const valorResultado = document.getElementById('valor-resultado');
    const mensagemDica = document.getElementById('mensagem-dica');

    valorResultado.innerText = totalEmissao.toFixed(2) + " kg de CO₂";

    // Gera uma dica baseada no resultado
    if (totalEmissao < 500) {
        mensagemDica.innerText = "Excelente! Sua propriedade tem um impacto baixo. Continue com as boas práticas!";
    } else {
        mensagemDica.innerText = "Atenção: Procure otimizar o uso do trator ou explorar adubação orgânica para reduzir suas emissões.";
    }

    // Mostra a caixa de resultado
    areaResultado.className = 'resultado-visivel';
});
