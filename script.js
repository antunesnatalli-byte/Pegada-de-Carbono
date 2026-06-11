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
        // Lista de dicas BOAS (Impacto Baixo)
        mensagemDica.innerHTML = `
            <strong>Excelente! Sua propriedade tem um impacto baixo. Continue com estas boas práticas:</strong>
            <ul style="text-align: left; margin-top: 15px; padding-left: 20px; font-size: 0.95rem; line-height: 1.5;">
                <li style="margin-bottom: 8px;"><strong>Manutenção eficiente do maquinário:</strong> verifique regularmente pneus, motor e filtros para reduzir consumo de combustível.</li>
                <li style="margin-bottom: 8px;"><strong>Planejamento das atividades agrícolas:</strong> agrupe tarefas e reduza deslocamentos desnecessários de tratores ou máquinas.</li>
                <li style="margin-bottom: 8px;"><strong>Uso contínuo de adubação orgânica:</strong> prefira compostos, esterco e biofertilizantes para reduzir CO₂ e óxidos de nitrogênio.</li>
                <li style="margin-bottom: 8px;"><strong>Implementar plantio direto ou mínimo revolvimento do solo:</strong> mantém carbono no solo e diminui uso de máquinas.</li>
                <li style="margin-bottom: 8px;"><strong>Rotação e diversidade de culturas:</strong> melhora a fertilidade do solo e reduz dependência de insumos químicos.</li>
                <li style="margin-bottom: 8px;"><strong>Aproveitamento de resíduos agrícolas:</strong> restos de culturas podem virar compostos, evitando emissão de gases na decomposição.</li>
                <li style="margin-bottom: 8px;"><strong>Eficiência na irrigação:</strong> use sistemas que economizem água e energia, como gotejamento ou sensores de umidade.</li>
                <li style="margin-bottom: 8px;"><strong>Plantio de árvores e cobertura vegetal:</strong> sequestram carbono, protegem o solo e promovem biodiversidade.</li>
                <li style="margin-bottom: 8px;"><strong>Uso de combustíveis alternativos ou renováveis:</strong> biodiesel ou eletrificação parcial de máquinas pode reduzir ainda mais CO₂.</li>
                <li style="margin-bottom: 8px;"><strong>Monitoramento e registro das práticas:</strong> medir consumo de energia, fertilizantes e combustível ajuda a identificar oportunidades de melhoria contínua.</li>
            </ul>
        `;
    } else {
        // Lista de dicas de ALERTA (Impacto Alto)
        mensagemDica.innerHTML = `
            <strong>Atenção! Considere adotar as seguintes práticas para reduzir suas emissões:</strong>
            <ul style="text-align: left; margin-top: 15px; padding-left: 20px; font-size: 0.95rem; line-height: 1.5;">
                <li style="margin-bottom: 8px;"><strong>Reduza o uso do trator:</strong> planeje bem o trabalho para diminuir deslocamentos e horas de uso.</li>
                <li style="margin-bottom: 8px;"><strong>Mantenha o trator bem calibrado:</strong> pneus calibrados, motor regulado e manutenção regular aumentam eficiência de combustível.</li>
                <li style="margin-bottom: 8px;"><strong>Use adubação orgânica:</strong> esterco, compostos e biofertilizantes liberam menos gases de efeito estufa que fertilizantes químicos.</li>
                <li style="margin-bottom: 8px;"><strong>Adote rotação de culturas:</strong> alternar plantas ajuda a manter o solo fértil naturalmente, reduzindo necessidade de fertilizantes sintéticos.</li>
                <li style="margin-bottom: 8px;"><strong>Implemente plantio direto ou mínimo revolvimento do solo:</strong> reduz o uso de maquinário e preserva carbono no solo.</li>
                <li style="margin-bottom: 8px;"><strong>Prefira combustíveis mais limpos:</strong> biodiesel ou combustíveis renováveis no trator diminuem a emissão de CO₂.</li>
                <li style="margin-bottom: 8px;"><strong>Aproveite resíduos da fazenda:</strong> palha, restos de culturas e podas podem virar compostos, evitando que se decomponham liberando carbono.</li>
                <li style="margin-bottom: 8px;"><strong>Instale sistemas de irrigação eficientes:</strong> menos energia gasta significa menos CO₂.</li>
                <li style="margin-bottom: 8px;"><strong>Plante árvores ou faixas de vegetação:</strong> ajudam a sequestrar carbono e melhorar a biodiversidade da área agrícola.</li>
                <li style="margin-bottom: 8px;"><strong>Monitore e registre práticas sustentáveis:</strong> medir o consumo de combustível, fertilizantes e adubos permite identificar melhorias contínuas.</li>
            </ul>
        `;
    }

    // Mostra a caixa de resultado
    areaResultado.className = 'resultado-visivel';
});
