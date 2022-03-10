const anotacoes = document.querySelector('.anotacoes');

let enviar = document.querySelector('#enviar').addEventListener('click', () => {
    let texto = document.createTextNode(document.querySelector('#texto').value);
    let titulo = document.createTextNode(document.querySelector('#titulo').value);

    if(texto == '' || titulo == '' || !/\S/.test(document.querySelector('#titulo').value) || !/\S/.test(document.querySelector('#texto').value)){
        document.querySelector('#titulo').value = ""
        document.querySelector('#texto').value = ""
    } else {
        let anotacao = document.createElement("div");
        anotacoes.appendChild(anotacao);
        anotacao.classList.add('anotacao');
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        anotacao.appendChild(checkbox);
        let anotacaoTitulo = document.createElement('h1');
        anotacao.appendChild(anotacaoTitulo);
        anotacaoTitulo.appendChild(titulo);
        let anotacaoTexto = document.createElement('p');
        anotacao.appendChild(anotacaoTexto);
        anotacaoTexto.appendChild(texto);
        document.querySelector('#titulo').value = ""
        document.querySelector('#texto').value = ""
    }    
});

let excluir = document.querySelector('#excluir').addEventListener('click', () => {
    let itens = anotacoes.children;
    for(let i=0; i<itens.length; i++){
        while(itens[i] && itens[i].children[0].checked){
            anotacoes.removeChild(itens[i]);
        }
    }
})