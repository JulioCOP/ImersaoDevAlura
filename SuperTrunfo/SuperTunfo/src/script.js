// 1º =  criar lista com variaveis do mesmo tipo
// atributos seria como se fosse um onjeto dentro da lista de objetos carta

var carta1 = {
  nome:"Ronaldinho Gaúcho", imagem: "https://pbs.twimg.com/media/FUbdbIuWIAIPh4k.jpg", 
  atributos: {
    ataque: 7, 
    defesa: 4,
   habilidade: 10
  }
}

var carta2={
  nome: "Leandro Donizete", imagem: "http://cdn.espn.com.br/image/wide/622_44a68cff-0852-33a9-8334-37446a117f6e.gif",
  atributos:{
    ataque: 5,
    defesa:9,
    habilidade:3
  }
}

var carta3={
  nome:"Hulk",   imagem: "https://mercadodofutebol.com/wp-content/uploads/2021/10/Downloader.la-617845e98b2a5.jpg",
  atributos: {
    ataque: 8,
    defesa:5,
    habilidade:7
  }
}

var carta4={
  nome: "Victor",  imagem:"https://i.ytimg.com/vi/QPkblXTaVxk/hqdefault.jpg",
  atributos:{
    ataque:0,
    defesa:10,
    habilidade: 3
  }
}
var carta5={
  nome:"Reinaldo",  imagem:"https://www.hojeemdia.com.br/polopoly_fs/1.836762!/image/image.jpg_gen/derivatives/landscape_490/image.jpg",

  atributos:{
    ataque:10,
    defesa:1,
    habilidade: 8
  }
}
// variaveis para escolher carta da maquina e do jogado aleartoriamente
// necessário guardar as cartas (variaveis) dentro de uma lista

var cartaMaquina;
var cartaJogador;
//pdoedria ficar var cartaJogador=0 e var cartaMaquina =0
// ao colocar as variaveis fora da função, é possivel deixa-la acessível a outras funções, caso se deseja usa-las
var cartas = [carta1,carta2,carta3,carta4,carta5];

function sortearCarta(){
  // sortear 1 carta para maquina e uma carta para o jogador
  // Math.random()*5
  //transformar inteiro
  var numeroCartaMaquina = parseInt(Math.random() *5)
  cartaMaquina= cartas[numeroCartaMaquina];
  
  var numeroCartaJogador=parseInt(Math.random()*5);
  // pode ser que o programa selecione a mesma carta no sorteio e pare de rodar.
  // é necessário uma estrutura condicional que faça que o programa rode novamente em caso de seleção de cartas iguais.
  while (numeroCartaMaquina==numeroCartaJogador){
    numeroCartaJogador=parseInt(Math.random()*5);
  }
  cartaJogador=cartas[numeroCartaJogador];
  console.log(cartaJogador);
  // toda vez que seleciona em "SORTEAR", o programa roda e seleciona uma carta através do indice das lista
  
  // desativar o botão "Sortear Carta", após a jogada
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  exibirCartaJogador();
}

// função-> criar um determinado comportamento para o programa


function obterAtributoSelecionado (){
  // função para comparar os atributos da carta da maquina com a carta do usuário
  
  var atributoEscolhido =  document.getElementsByName("atributo")
  // No HTML não existe a propriedade "id", porem podemos usar a funcionalidade do JS chamada document.getElementByName, para imprimir na tela.
  // trouxe todos elementos, para saber o elemento especifico que o usuário deseja, se usa o for, para percorrer todo elemento e mostrar aquele que se deseja.
  
  for (var i=0; i< atributoEscolhido.length;i++){
    if (atributoEscolhido [i].checked == true){ // se o atributo escolhido estiver selecionado
      return atributoEscolhido[i].value
    }
  }
}
function jogar(){
  // função que chama o atributo escolhido pelo usuário
  var selecaoAtributo = obterAtributoSelecionado()
  // variavel para invocar a função
  var elementoResultado = document.getElementById("resultado")
  
  // variavel para colocar valor da carta do jogador e da maquina relacionados ao atributos
  
  var valorCartaDoJogador = cartaJogador.atributos[selecaoAtributo]
  var valorCartaDaMaquina = cartaMaquina.atributos[selecaoAtributo]
  if (valorCartaDoJogador > valorCartaDaMaquina){
    htmlResultado= "<p class='resultado-final'>Venceu</p>";
  }else if(valorCartaDaMaquina>valorCartaDoJogador){
    htmlResultado="<p class='resultado-final'>Perdeu</p>";
  }else{
    htmlResultado="<p class='resultado-final'>Empatou</p>";
  }
  elementoResultado.innerHTML= htmlResultado;
  document.getElementById("btnJogar").disabled=true;
  exibirCartaMaquina();
 }

function exibirCartaJogador(){
  var divCartaJogador=document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML= "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto="";
  for (var atributo in cartaJogador.atributos){
    opcoesTexto+="<input type='radio' name='atributo' value='"+ atributo +"'>"+ atributo+" "
    cartaJogador.atributos[atributo]+ "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  
  divCartaJogador.innerHTML= moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`
  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML= "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto=""
  for(var atributo in cartaMaquina.atributos){
    opcoesTexto+="<p type= 'text' name='atributo' value='"+ atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}