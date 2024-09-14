document.addEventListener('DOMContentLoaded', function() {
    const comorbidadesField = document.getElementById('comorbidades');
    const modal = document.getElementById('selection-modal');
    const comorbidadesOptionsDiv = document.getElementById('comorbidades-options');
    const confirmButton = document.getElementById('confirm-selection');

    const comorbidades = [
        'Arritmias cardíacas',
        'Cardiopatia hipertensiva',
        'Cardiopatias congênitas no adulto',
        'Cirrose hepática',
        'Diabetes mellitus',
        'Doença cerebrovascular',
        'Doença renal crônica',
        'Doenças da aorta, dos grandes vasos e fístulas arteriovenosas',
        'Hemoglobinopatias graves',
        'Hipertensão arterial',
        'Hipertensão Arterial Resistente (HAR)',
        'Hipertensão pulmonar / Cor-pulmonale',
        'Imunossuprimidos',
        'Insuficiência cardíaca',
        'Miocardiopatias e pericardiopatias',
        'Obesidade mórbida',
        'Pneumopatias crônicas graves',
        'Próteses valvares e dispositivos cardíacos implantados',
        'Reumáticos como portadores de espondilite anquilosante',
        'Síndrome de Down'
    ];

    // Quando o campo de comorbidades for clicado
    comorbidadesField.addEventListener('click', function() {
        // Limpa opções anteriores, caso existam
        comorbidadesOptionsDiv.innerHTML = '';

        // Exibe a modal
        modal.classList.remove('hidden');

        // Cria uma lista de checkboxes para as comorbidades
        comorbidades.forEach((comorbidade, index) => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `comorbidade-${index}`;
            checkbox.value = comorbidade;

            const label = document.createElement('label');
            label.htmlFor = `comorbidade-${index}`;
            label.textContent = comorbidade;

            const div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);

            comorbidadesOptionsDiv.appendChild(div);
        });
    });

    // Confirma a seleção de comorbidades
    confirmButton.addEventListener('click', function() {
        const selectedComorbidades = [];
        comorbidades.forEach((comorbidade, index) => {
            const checkbox = document.getElementById(`comorbidade-${index}`);
            if (checkbox.checked) {
                selectedComorbidades.push(comorbidade);
            }
        });

        // Preenche o campo de comorbidades com as selecionadas
        comorbidadesField.value = selectedComorbidades.join(', ');

        // Fecha a modal
        modal.classList.add('hidden');
    });
});
