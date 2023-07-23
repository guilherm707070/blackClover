const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth<450 ){
            window.scrollTo({top:0,behavior: "smooth"});
        }

        removerseleçãodopesonagem();

        personagem.classList.add('selecionado');

        alteraImagemPersonagemGrande(personagem);

       AlteraNomeDoPesonagemGrande(personagem);
        
       AlteraDescricaoDoPersonagem(personagem);

       })
})

function AlteraDescricaoDoPersonagem(personagem) {
    const descricãoPersonagem = document.getElementById('descricao-personagem');
    descricãoPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlteraNomeDoPesonagemGrande(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alteraImagemPersonagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagem/card-${idPersonagem}.png`;
}

function removerseleçãodopesonagem() {
    const personagemselecionado = document.querySelector('.selecionado');
    personagemselecionado.classList.remove('selecionado');
}