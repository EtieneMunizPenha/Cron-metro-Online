/* VARIAVEIS */
const timer = document.getElementById("timer");
const btnToggle = document.getElementById("btn-start");
const btnReset = document.getElementById("btn-reset");

let seconds = 0;
let interval = null;

/* FUNÇÕES */
//Formatar o timer
const timerFormatter = () => {
  //Em 1 hora há 3600seg. Convertendo segundos em hora, transformando em uma string. Vamos usar o padStart para. Vamos usar o padStart padStart(2, "0")  para garantir que os números sempre tenham dois dígitos, mesmo quando são menores que 10. O 1º argumento é o comprimento desejado da string final., e o segundo argumento é o caractere que será adicionado à esquerda se necessário.
  let hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  //seconds % 3600 → Pega apenas os segundos que sobraram depois das horas, e / 60 → Converte esses segundos restantes em minutos.
  let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  let secs = String(Math.floor(seconds % 60)).padStart(2, "0");

  timer.innerHTML = `${hours}:${mins}:${secs}`;
  console.log(hours, mins, secs);
};

//Iniciar e Pausar o cronometro
const toggleTimer = () => {
  //O setInterval() é uma função do JavaScript usada para executar outra função repetidamente em um intervalo de tempo definido. Ele continua rodando até ser parado manualmente com clearInterval().
  //Sintaxe: setInterval(função, intervalo);
  //função → A função que será executada repetidamente.
  //intervalo → Tempo em milissegundos (ms) entre cada execução.
  //1 segundo = 1000 milissegundos
  //Então, se colocarmos setInterval(minhaFuncao, 1000), significa que minhaFuncao será executada a cada 1 segundo.
  /*
    function dizerOla() {
      console.log("Olá, mundo!");
    }

    setInterval(dizerOla, 2000); // Executa "dizerOla" a cada 2 segundos  
    */
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      timerFormatter();
    }, 1000);
    btnToggle.textContent = "Pause";
    btnReset.style.display = "block";
  } else {
    //Para pausar o cronômetro, você pode usar clearInterval(id = variavel que armazena o intevalo), onde id é o identificador retornado pelo setInterval()
    clearInterval(interval);
    interval = null;
    btnToggle.textContent = "Play";
  }
};

//Resetar o Timer
const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  timerFormatter();
  btnToggle.textContent = "Play";
  btnReset.style.display = "none";
};

btnToggle.addEventListener("click", toggleTimer);
btnReset.addEventListener("click", resetTimer);

timerFormatter();
