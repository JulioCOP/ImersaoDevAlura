// 1º =  criar lista com variaveis do mesmo tipo
// atributos seria como se fosse um onjeto dentro da lista de objetos carta
var cartas = []
var carta1 = {
  nome:"Ronaldinho Gaúcho", 
  atributos: {
    ataque: 7, 
    defesa: 4,
   habilidade: 10
  },
  imagem: "https://pbs.twimg.com/media/EY4Yke7X0AAry_r.jpg"
}

var carta2={
  nome: "Leandro Donizete",
  atributos:{
    ataque: 5,
    defesa:9,
    habilidade:3
  },
  imagem: "http://cdn.espn.com.br/image/wide/622_44a68cff-0852-33a9-8334-37446a117f6e.gif"
}

var carta3={
  nome:"Hulk",
  atributos: {
    ataque: 8,
    defesa:5,
    habilidade:7
  },
  imagem: "https://s2.glbimg.com/w9u33OJaKOTiMWrO2GCvLVJThuM=/0x0:2047x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/J/x/h8KCyoRRS5EHobkRJOkw/52166842846-8a75ad9248-k.jpg"
}

var carta4={
  nome: "Victor",
  atributos:{
    ataque:0,
    defesa:10,
    habilidade: 3
  },
  imagem:"http://s2.glbimg.com/ioa3xVAHy6UDwtK7to7wFTAbV2Y=/s.glbimg.com/es/ge/f/original/2013/05/31/victor_atleticomg2_reu.jpg_30.jpg"
}
var carta5={
  nome:"Reinaldo",
  atributos:{
    ataque:10,
    defesa:1,
    habilidade: 8
  },
  imagem:"https://pbs.twimg.com/media/ExzyVYZWQAg43m0.jpg:large"
}
// variaveis para escolher carta da maquina e do jogado aleartoriamente
// necessário guardar as cartas (variaveis) dentro de uma lista

var cartaMaquina = {}
var cartaJogador= {}
//pdoedria ficar var cartaJogador=0 e var cartaMaquina =0
// ao colocar as variaveis fora da função, é possivel deixa-la acessível a outras funções, caso se deseja usa-las
cartas.push(carta1)
cartas.push(carta2)
cartas.push(carta3)
cartas.push(carta4)
cartas.push(carta5)


function sortearCarta(){
  // sortear 1 carta para maquina e uma carta para o jogador
  // Math.random()*5
  //transformar inteiro
  var numeroCartaMaquina = parseInt(Math.random() *5)
  cartaDaMaquina= cartas[numeroCartaMaquina]
  
  var numeroCartaJogador=parseInt(Math.random()*5)
  // pode ser que o programa selecione a mesma carta no sorteio e pare de rodar.
  // é necessário uma estrutura condicional que faça que o programa rode novamente em caso de seleção de cartas iguais.
  while (numeroCartaMaquina==numeroCartaJogador){
    numeroCartaJogador=parseInt(Math.random()*5)
  }
  cartaDoJogador=cartas[numeroCartaJogador]
  console.log(cartaDoJogador)
  // toda vez que seleciona em "SORTEAR", o programa roda e seleciona uma carta através do indice das lista
  
  // desativar o botão "Sortear Carta", após a jogada
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  exibirOpcoes()
}

// função-> criar um determinado comportamento para o programa

function exibirOpcoes() {
  var opcoes =  document.getElementById("opcoes")
  // criar um texto que será impresso na tela e ai o usuário possa escolher qual dos atributos o usuário deseja selecionar
  var opcoesTexto = ""
  
  for ( var atributo in cartaDoJogador.atributos) {
        // para cada elemento da lista, a variavel (que faz o papel de INDICE), pecorre dentro da lista, os atributos correspondentes do elemento. 
    opcoesTexto += "<input type='radio' name = 'atributo' value ='" + atributo + "'>" + atributo
    
    // <input = entrada de dados 
    // type radio = radio button -> botões que mostram varias opções de acordo com os tipos mostrado (name,atributo)
  }
  opcoes.innerHTML = opcoesTexto
}

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
  
  var valorCartaDoJogador = cartaDoJogador.atributos[selecaoAtributo]
  var valorCartaDaMaquina = cartaDaMaquina.atributos[selecaoAtributo]
  if (valorCartaDoJogador > valorCartaDaMaquina){
    elementoResultado.innerHTML = "PARABÉNS, VOCÊ VENCEU !"
  }else if(valorCartaDaMaquina>valorCartaDoJogador){
    elementoResultado.innerHTML= "VOCÊ PERDEU... GAME OVER !!!"
  }else{
    elementoResultado.innerHTML="EMPATOU"
  }
  console.log(cartaDaMaquina)
 
}