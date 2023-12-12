const videosContainer = document.querySelector('.videos__container');

async function buscarVideos() {
    const videos = await fetch("http://localhost:3000/videos");
    return videos.json();
}

async function mostrarNaTelaVideos() {
    try {
        const videos = await buscarVideos();
        videos.forEach(video => {
            videosContainer.innerHTML += `
                <li class="videos__item">
                <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                         <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                         <h3 class="titulo-video">${video.titulo}</h3>
                             <p class="titulo-canal">${video.descricao}</p>
                     </div>
                     <p class="categoria" hidden>${video.categoria}</p>
            </li>
            `
        });
    } catch (error) {
        videosContainer.innerHTML = `
        <p>Error : ${error.message}</p>
        `
    }
}

mostrarNaTelaVideos();


const pesquisarInput = document.querySelector('.pesquisar__input');
const categorias = document.querySelectorAll('.superior__item');

pesquisarInput.addEventListener('input', () => {
    const digitado = pesquisarInput.value.toLowerCase();
    filtrarVideos(digitado);
});

for (let item of categorias) {
    item.onclick = () => {
        let categoria = item.textContent.toLocaleLowerCase();
        filtrarCategorias(categoria);
    }
}


function filtrarVideos(digitado) {
    const items = document.querySelectorAll('.videos__item');

    if (pesquisarInput.value !== "") {
        for (let video of items) {
            const titulo = video.querySelector('.titulo-video').textContent.toLocaleLowerCase();

            if (!titulo.includes(digitado)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

            if(pesquisarInput === ""){
                video.style.display = "block";
            }
        }
    } 
}

function filtrarCategorias(categoria) {
    const items = document.querySelectorAll('.videos__item');

    for (let video of items) {
        const categoriaVideo = video.querySelector('.categoria').textContent.toLocaleLowerCase();


        if (!categoriaVideo.includes(categoria)) {
            video.style.display = 'none';
        } else {
            video.style.display = 'block';
        }

        if (categoria === "tudo") {
            video.style.display = 'block';
        }
    }
}


