function atribuiBordaAleatoria() {
    const elementos = document.querySelectorAll('body *:not(script):not(style)');
    const qtdElementos = elementos.length;

    const coresTag = {};

    const voidElements = [
        'area', 'base', 'br', 'col', 'embed',
        'hr', 'img', 'input', 'link', 'meta',
        'param', 'source', 'track', 'wbr'
    ];
    //Esses elementos acima são os elementos void, ou seja, não possuem conteúdo e não precisam de uma tag de fechamento. Optei deixa-los sem borda para evitar que a borda interfira na visualização do conteúdo, já que eles não possuem conteúdo interno.

    for (let i = 0; i < qtdElementos; i++) {
        const elemento = elementos[i];
        const tag = elemento.tagName.toLowerCase();

        if (!coresTag[tag]) {
            const matiz = (Object.keys(coresTag).length * 36) % 360;
            coresTag[tag] = `hsl(${matiz}, 100%, 50%)`;
        }

        const cor = coresTag[tag];
        const isVoid = voidElements.includes(tag);

        if (!isVoid) {
            elemento.style.border = '2px solid ' + cor;
            elemento.style.position = 'relative';
            elemento.style.padding = '10px';
        }

        const tagNome = document.createElement('span');
        tagNome.innerText = tag;

        Object.assign(tagNome.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundColor: cor,
            color: '#000',
            fontSize: '10px',
            padding: '2px 5px',
            fontWeight: 'bold',
            zIndex: '1000',
            pointerEvents: 'none',
            lineHeight: '1'
        });
        
        if (!isVoid) {
            elemento.prepend(tagNome);
        }
    }
}

window.onload = atribuiBordaAleatoria;