const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-br";

  const btnAudio = document.querySelector('.cabecalho__audio');

  btnAudio.addEventListener('click', (event) => {
    event.preventDefault();
    btnAudio.style.border = "solid red 3px";
    recognition.start();
    setTimeout(() => {
      btnAudio.style.border = "none";
      recognition.stop();
    }, 10000);
  });
  
  recognition.addEventListener('result', (result) => {
    let resultado = result.results[0][0].transcript.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    pesquisarInput.value = resultado;
    filtrarVideos(resultado);
  });



 

