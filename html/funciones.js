// ===== FUNCIONES DE ANÁLISIS =====

function contarPalabras(texto) {
    let contador = 0;
    let enPalabra = false;
    
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (caracter === ' ' || caracter === '\n' || caracter === '\t') {
            if (enPalabra) {
                contador++;
                enPalabra = false;
            }
        } else {
            enPalabra = true;
        }
    }
    
    if (enPalabra) contador++;
    return contador;
}

function contarSignosPuntuacion(texto) {
    const signos = ['.', ',', ';', ':', '!', '?', '¿', '¡'];
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < signos.length; j++) {
            if (texto[i] === signos[j]) {
                contador++;
                break;
            }
        }
    }
    
    return contador;
}

function contarVocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (texto[i] === vocales[j]) {
                contador++;
                break;
            }
        }
    }
    
    return contador;
}

function contarConsonantes(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (((caracter >= 'a' && caracter <= 'z') || 
             (caracter >= 'A' && caracter <= 'Z')) && 
            !vocales.includes(caracter)) {
            contador++;
        }
    }
    
    return contador;
}

function contarDigitos(texto) {
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= '0' && texto[i] <= '9') {
            contador++;
        }
    }
    
    return contador;
}

function invertirTexto(texto) {
    let resultado = '';
    
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }
    
    return resultado;
}

function contarCaracteres(texto) {
    return texto.length;
}

function contarParrafos(texto) {
    if (texto.length === 0) return 0;
    
    let contador = 1;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '\n') {
            let j = i + 1;
            while (j < texto.length && (texto[j] === '\n' || texto[j] === ' ')) {
                j++;
            }
            if (j < texto.length && texto[j] !== '\n') {
                contador++;
            }
            i = j - 1;
        }
    }
    
    return contador;
}