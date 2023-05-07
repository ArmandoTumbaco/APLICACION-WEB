const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const adivinarNumero = () => {
  const numeroElement = document.getElementById("numero");
  const resultadoElement = document.getElementById("resultado");
  const numeroUsuario = parseInt(numeroElement.value);

  if (numeroUsuario === numeroAleatorio) {
    resultadoElement.textContent = "¡Correcto! ¡Has adivinado el número!";
  } else if (numeroUsuario > numeroAleatorio) {
    resultadoElement.textContent = "El número es menor. Vuelve a intentarlo.";
  } else {
    resultadoElement.textContent = "El número es mayor. Vuelve a intentarlo.";
  }
};
