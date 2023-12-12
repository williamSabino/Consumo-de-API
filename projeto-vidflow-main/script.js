const videosContainer = document.querySelector('.videos__container');
const api = fetch("http://localhost:3000/videos")
    .then(results =>results.json())
    .then(videos => {
        videos.forEach(video => {
            videosContainer.innerHTML += `
            <li class="videos__item">
            <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                     <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                     <h3 class="titulo-video">${video.titulo}</h3>
                         <p class="titulo-canal">${video.descricao}</p>
                 </div>
              
        </li>
        `
        });
    })
    .catch(err => console.error(err));