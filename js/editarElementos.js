// Função para criar e estilizar o textarea com um botão de salvar
function createStyledTextarea(currentText, targetElement) {
    // Criação do container que vai envolver o textarea e o botão
    const container = document.createElement('div');
    container.style.position = 'relative';

    // Criação do textarea com estilo
    const input = document.createElement('textarea');
    input.value = currentText;
    input.style.width = '100%';
    input.style.height = targetElement.offsetHeight + 'px';
    input.style.border = 'none';
    input.style.backgroundColor = 'inherit';
    input.style.color = '#333';
    input.style.fontSize = '17px';
    input.style.lineHeight = '1.5';
    input.style.padding = '10px';
    input.style.boxSizing = 'border-box';
    input.style.outline = 'none';
    input.style.resize = 'vertical';

    // Criação do botão de salvar
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Salvar';
    saveButton.style.position = 'absolute';
    saveButton.style.top = '5px';
    saveButton.style.right = '5px';
    saveButton.style.backgroundColor = '#0D0D2B';
    saveButton.style.color = '#fff';
    saveButton.style.border = 'none';
    saveButton.style.padding = '5px 10px';
    saveButton.style.cursor = 'pointer';
    saveButton.style.borderRadius = '5px';

    // Ação do botão de salvar
    saveButton.onclick = function () {
        targetElement.innerText = input.value.trim() !== '' ? input.value : currentText; // Atualiza o texto
        container.replaceWith(targetElement); // Substitui o container pelo elemento original
    };

    // Adiciona o textarea e o botão ao container
    container.appendChild(input);
    container.appendChild(saveButton);

    // Ação ao perder o foco (opcional, pode ser removida se o botão for o único meio de salvar)
    input.onblur = function () {
        if (!document.activeElement.isSameNode(saveButton)) {
            container.replaceWith(targetElement);
        }
    };

    return container;
}

// Função para permitir a troca de imagem ao clicar
function enableImageEdit(imageSelector) {
    const imgElement = document.querySelector(imageSelector);
    imgElement.style.cursor = 'pointer';

    imgElement.addEventListener('click', function () {
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = 'image/*';
        inputFile.style.display = 'none';

        inputFile.addEventListener('change', function () {
            const file = inputFile.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imgElement.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        inputFile.click();
    });
}

// Ativa a edição de texto para os elementos de texto existentes
function enableTextEdit(textSelector) {
    document.querySelector(textSelector).addEventListener('click', function () {
        const currentText = this.innerText;
        const inputContainer = createStyledTextarea(currentText, this);
        this.replaceWith(inputContainer);
        inputContainer.querySelector('textarea').focus();
    });

    // Adiciona um indicador visual de que o texto pode ser editado ao passar o mouse
    const element = document.querySelector(textSelector);
    element.style.cursor = 'pointer';
    element.addEventListener('mouseover', () => {
        element.style.borderBottom = '1px dashed #333'; // Linha pontilhada para indicar que é editável
    });
    element.addEventListener('mouseout', () => {
        element.style.borderBottom = 'none'; // Remove a linha quando o mouse sai
    });
}

// Inicializa a edição para imagens e textos
enableImageEdit('.logo-clinica img');
enableImageEdit('.img-clinica img');
enableTextEdit('.texto h1');
enableTextEdit('.texto2 h1');
enableImageEdit('.img-med img');
