// ===== FUNCIONES DE LA APLICACIÓN =====

function mostrarResultado(titulo, valor) {
    return `
        <div class="result-item">
            <div class="result-title">${titulo}</div>
            <div class="result-value">${valor}</div>
        </div>
    `;
}

function analizarTodo() {
    const texto = document.getElementById('textInput').value;
    const resultados = document.getElementById('results');
    
    if (texto.trim().length === 0) {
        resultados.innerHTML = '<div class="result-item">Por favor ingresa un texto</div>';
        return;
    }
    
    let html = '';
    
    html += mostrarResultado('📝 Total de Palabras', contarPalabras(texto));
    html += mostrarResultado('🔤 Total de Caracteres', contarCaracteres(texto));
    html += mostrarResultado('📄 Párrafos', contarParrafos(texto));
    html += mostrarResultado('🎯 Signos de Puntuación', contarSignosPuntuacion(texto));
    html += mostrarResultado('🗣️ Vocales', contarVocales(texto));
    html += mostrarResultado('🔇 Consonantes', contarConsonantes(texto));
    html += mostrarResultado('🔢 Dígitos', contarDigitos(texto));
    html += mostrarResultado('🔄 Texto Invertido', invertirTexto(texto));
    
    resultados.innerHTML = html;
}

function limpiarResultados() {
    document.getElementById('results').innerHTML = '';
    document.getElementById('textInput').value = '';
}