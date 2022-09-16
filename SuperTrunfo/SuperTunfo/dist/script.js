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
  nome:"Hulk",   imagem: "https://www.hojeemdia.com.br/polopoly_fs/1.836762!/image/image.jpg_gen/derivatives/landscape_490/image.jpg",
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
  nome:"Reinaldo",  imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Reinaldo_-_Atl%C3%A9tico_Mineiro.jpg/300px-Reinaldo_-_Atl%C3%A9tico_Mineiro.jpg",

  atributos:{
    ataque:10,
    defesa:1,
    habilidade: 8
  }
}
var carta6={
  nome:"Guilherme Arana",  imagem:"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2022/02/atletico-guilherme-arana-1.jpg",

  atributos:{
    ataque:7,
    defesa:6,
    habilidade: 8
  }
}
var carta7={
  nome:"Leonardo Silva",  imagem:"https://terceirotempo.uol.com.br/imagens/73/48/110300.jpg",

  atributos:{
    ataque:5,
    defesa:9,
    habilidade: 3
  }
}
var carta8={
  nome:"Pierre",  imagem:"https://static.ndmais.com.br/2013/02/05-02-2013-03-02-16-pierre-tem-edema-na-coxa-direita-e-vira-preocupacao-no-atletico-mg.jpg",

  atributos:{
    ataque:2,
    defesa:9,
    habilidade: 3
  }
}
var carta9={
  nome:"Marques",  imagem:"https://terceirotempo.uol.com.br/imagens/56/60/qfl_fto_15660.jpg",

  atributos:{
    ataque:8,
    defesa:4,
    habilidade: 7
  }
}
var carta10={
  nome:"Rever",  imagem:"https://images.futebolinterior.com.br/2021/04/0002050053271_img.jpg",

  atributos:{
    ataque:6,
    defesa:8,
    habilidade: 6
  }
}
var carta11={
  nome:"GALO DOIDO",  imagem:"https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/11/mascote-atletico-mg-provoca-flamengo.png",

  atributos:{
    ataque:13,
    defesa:13,
    habilidade: 13
  }
}
// variaveis para escolher carta da maquina e do jogado aleartoriamente
// necessário guardar as cartas (variaveis) dentro de uma lista

var cartaMaquina;
var cartaJogador;
//pdoedria ficar var cartaJogador=0 e var cartaMaquina =0
// ao colocar as variaveis fora da função, é possivel deixa-la acessível a outras funções, caso se deseja usa-las
var cartas = [carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,carta11];

function sortearCarta(){
  // sortear 1 carta para maquina e uma carta para o jogador
  // Math.random()*5
  //transformar inteiro
  var numeroCartaMaquina = parseInt(Math.random() *11)
  cartaMaquina= cartas[numeroCartaMaquina];
  
  var numeroCartaJogador=parseInt(Math.random()*11);
  // pode ser que o programa selecione a mesma carta no sorteio e pare de rodar.
  // é necessário uma estrutura condicional que faça que o programa rode novamente em caso de seleção de cartas iguais.
  while (numeroCartaMaquina==numeroCartaJogador){
    numeroCartaJogador=parseInt(Math.random()*11);
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

