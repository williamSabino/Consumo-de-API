
async function inserirVideo(titulo, url, imagem, categoria){
    const video = JSON.stringify({titulo, url, imagem, categoria});
    const response = await fetch(`http://localhost:3000/videos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: video,
    });
 return await response.json();
};

const formularioEnviarVideo = document.querySelector('.formulario__inserirVideo');

formularioEnviarVideo.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    console.log(titulo, url, imagem, categoria);
    await inserirVideo(titulo, url, imagem, categoria);
    window.location.href = "../index.html";
});