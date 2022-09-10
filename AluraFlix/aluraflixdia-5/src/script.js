function adicionarFilme() {
  // variavel para guardar informações que são adicionadas
  var filmeFavorito = document.getElementById("filme").value;
  //condicional para caso o link da mensagem não estiver de acordo. ao inves de retornar uma imagem quebrada, irá retornar uma outra mensagem
  // a varivel filmeFavorito é uma variavel local, pois ela foi inserida dentro uma função, atendendo somente a função ao qual ela se localiza. Para atender as duas funções, ela teria que ser declarada externamente as duas funções
  if (filmeFavorito.endsWith(".jpg")) {
    //imprimir na tela um elemento de imagem
    listaFilmesNaTela(filmeFavorito);
  } else {
    console.error("ENDEREÇO DE FILME INVALIDO");
  }
  document.getElementById("filme").value = " ";
}

function listaFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  //local para exibir a lista de filmes
  // no html esta localizada dentro do comando div, que é o espaço reservado para inserir dados na pagina
  var listaFilmes = document.getElementById("listaFilmes");
  // inserir um determinado conteudo a variavel elemento criado

  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito;
  // inserir mais de um filme sem que sobreescreva os dados inseridos inicialmente
}
