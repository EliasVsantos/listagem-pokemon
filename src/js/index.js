
//passo 1 - pegar no JS o elemento HTML correspondente ao botão de trocar o tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemente HTML correpondente ao boby

const boby = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");

// passo 3- dar um jeito de identificar o click do usuário no botão de trocar o tema

botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - verificar se o boby já tem a classe do modo-escuro do boby

    const modoEscuroEstaAtivo = boby.classList.contains("modo-escuro");

    boby.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe modo-escuro do boby
        

        // passo 8 - trocar a imagem do botão alterar tema pra sol
        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        // passo 4 - adicionar a classe modo-escuro no boby

        // passo 5 - trocar a imagem do botão alterar tema pra lua
        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});





