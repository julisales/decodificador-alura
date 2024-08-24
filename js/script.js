document.querySelector('.btn-cripto').addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    if (!validarTexto(texto)) return;

    const textoCriptografado = criptografarTexto(texto);
    mostrarResultado(textoCriptografado);
});

document.querySelector('.btn-descripto').addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    if (!validarTexto(texto)) return;

    const textoDescriptografado = descriptografarTexto(texto);
    mostrarResultado(textoDescriptografado);
});

document.querySelector('.btn-copiar').addEventListener('click', () => {
    const textoResultado = document.getElementById('texto-resultado').textContent;
    navigator.clipboard.writeText(textoResultado);

    mostrarAvisoCopiado();
});

document.getElementById('texto').addEventListener('input', verificarTextoVazio);

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function validarTexto(texto) {
    const regex = /^[a-z\s,.!?]+$/;
    if (texto.trim() === '') {
        alert('Por favor, digite algo no campo de texto.');
        return false;
    }
    if (!regex.test(texto)) {
        alert('Digite apenas letras minúsculas e sem acentos.');
        return false;
    }
    return true;
}

function mostrarResultado(resultado) {
    document.querySelector('.sem-retorno').style.display = 'none';
    document.getElementById('texto-resultado').style.display = 'block';
    document.getElementById('texto-resultado').textContent = resultado;
    document.querySelector('.btn-copiar').style.display = 'block';

    const outputSection = document.querySelector('.output');
    outputSection.classList.add('space-between');
}

function mostrarAvisoCopiado() {
    const aviso = document.getElementById('aviso-copiado');
    aviso.style.display = 'block';
    aviso.style.opacity = '1';

    setTimeout(() => {
        aviso.style.opacity = '0';
        setTimeout(() => {
            aviso.style.display = 'none';
        }, 300);
    }, 1500);
}

function verificarTextoVazio() {
    const texto = document.getElementById('texto').value;

    if (texto.trim() === '') {
        document.querySelector('.sem-retorno').style.display = 'block';
        document.getElementById('texto-resultado').style.display = 'none';
        document.querySelector('.btn-copiar').style.display = 'none';

        const outputSection = document.querySelector('.output');
        outputSection.classList.remove('space-between');
    }
}
