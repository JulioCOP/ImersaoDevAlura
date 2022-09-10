var numeroPc = parseInt(Math.random() * 11);
var tentativas = 0;

while (tentativas <= 3) {
  tentativas += 1;
  if (tentativas > 3) {
    var elementoFinal = document.getElementById("resultado");
    elementoFinal.innerHTML = "SUAS TENTATIVAS ACABARAM, REINICIE O JOGO";
    stop;
  } else {
    function Jogar() {
      var jogar = parseInt(document.getElementById("valor").value);
      var elementoResultado = document.getElementById("resultado");
      if (jogar == numeroPc) {
        elementoResultado.innerHTML = "parabens, você acertou";
      } else if (jogar > 10 || jogar < 0) {
        elementoResultado.innerHTML =
          "erro, selecione um valor correspondente ao intervalo";
      } else {
        elementoResultado.innerHTML = "errou, tente novamente";
      }
    }
  }
}