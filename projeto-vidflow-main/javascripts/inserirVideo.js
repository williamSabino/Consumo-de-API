
async function inserirVideo(titulo, descricao, url, imagem, categoria) {
    const video = JSON.stringify({ titulo, descricao, url, imagem, categoria });
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
const btnVoltar = document.querySelector('input[value="Voltar"]');

btnVoltar.addEventListener('click', () => {
    window.location.href = "../index.html";
});

formularioEnviarVideo.addEventListener('submit', async (event) => {
    event.preventDefault();
    const visualizacao = Math.floor(Math.random() * 10);
    const descricao = `${visualizacao} mil visualizações`;
    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    await inserirVideo(titulo, descricao, url, imagem, categoria);
    window.location.href = "../index.html";
});