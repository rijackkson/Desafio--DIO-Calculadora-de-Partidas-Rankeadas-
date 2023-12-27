function calculateRankInfo() {
  // Obter valores de vitórias e derrotas
  var nickname = document.getElementById('nickname').value || 'Sem Nickname';
  var victories = parseInt(document.getElementById('victories').value) || 0;
  var defeats = parseInt(document.getElementById('defeats').value) || 0;

  // Calcular saldo de Ranqueadas
  var rankBalance = victories - defeats;

  // nível com base no saldo de Ranqueadas
  var level;
  if (victories < 10) {
    level = 'Ferro';
  } else if (victories <= 20) {
    level = 'Bronze';
  } else if (victories <= 50) {
    level = 'Prata';
  } else if (victories <= 80) {
    level = 'Ouro';
  } else if (victories <= 90) {
    level = 'Diamante';
  } else if (victories <= 100) {
    level = 'Lendário';
  } else {
    level = 'Imortal';
  }

  // Exibir resultado
  var resultMessage = "O Herói " + nickname + " tem um saldo de " + rankBalance + " e está no nível de " + level;
  document.getElementById('result').innerHTML = resultMessage;
}
