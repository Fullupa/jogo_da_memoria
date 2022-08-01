//So vou fazer o botao iniciar reagir ao ser clicado apagando a tela inicial e mostrando a do jogo ->

//antes de tudo nao pode esquecer de importar esse arquivo js no final do body do html, mas ja vou fazer isso dessa vez :)

//primeiro vamos pegar a tela inicial e a tela do jogo e coloca-las em variaveis....

const telaInicial = document.querySelector(".tela-inicial");  //peguei pela classe, por isso o ponto e nome da classe..
const telaJogo = document.querySelector(".tela-jogo");        //agora a do jogo so pra gente trabalhar com elas por aqui
// se reparar no html cada uma dessas divs tao envolvendo o conteudo inteiro de cada tela....


// agora vamos pegar o botao de iniciar que voce fez..... lembrar de sempre usar nomes beem obvios mesmo pras variaveis, tipo:   (e cameoCase. acho que ja sabe o que eh ne?)
const botaoIniciar = document.querySelector(".botao-iniciar");


//agora vamos chamar um metodo de adicionar um "evento escutador" nesse nosso botao, pra hora que ele ser clicado ele execute uma funcao que vamos passar nos parametros.... ->
botaoIniciar.addEventListener("click", () => {               //primeiro parametro o que vamos escutar(click) e o segundo o que vamos executar qdo clicar....
        telaInicial.classList.add("invisivel");        //adiciona a classe invisivel (display none) pra tela inicial
        telaJogo.classList.remove("invisivel");        //tira/remove a classe que ja tinha invisivel da tela jogo
});






//Aqui fiz o array[] com os objetos {} com nome e imagem de cada so pra ganhar tempo
const cards = [
    {
        nome: "Bruno",
        img:"./img/bruno.png"
    },
    {
       nome:"Caique",
       img:"./img/caique.png" 
    },
    {
        nome:"Edgar",
        img:"./img/edgar.png"
    },
    {
        nome:"Felipe",
        img:"./img/felipe.png"
    },
    {
        nome:"Fernando",
        img:"./img/fernando.png"
    },
    {
        nome:"Francisco",
        img:"./img/francisco.png"
    },
    {
        nome:"Manoel",
        img:"./img/manoel.png"
    },
    {
        nome:"Thiago",
        img:"./img/thiago.png"
    },
    {
        nome:"Kumas",
        img:"./img/kumas.png"
    }];