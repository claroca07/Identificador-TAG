function atribuiBordaAleatoria() {
        const elementos = document.querySelectorAll('body *:not(script):not(style)');
        const qtdElementos = elementos.length;

        for (let i = 0; i < qtdElementos; i++) {
            const elemento = elementos[i];

            const matiz = (360 / qtdElementos) * i;
            const cor = `hsl(${matiz}, 100%, 50%)`;

            elemento.style.border = `3px solid ${cor}`;
            elemento.style.position = 'relative';

            const tagNome = document.createElement('span');
            tagNome.innerText = elemento.tagName.toLowerCase();

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

            elemento.prepend(tagNome);
        }
    }

    window.onload = atribuiBordaAleatoria;
