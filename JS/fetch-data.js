const jobListingContainer = document.querySelector(".job-listing");

fetch("./json/data.json") // El fetch es asíncrono
  .then((res) => {
    return res.json();
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology;

      article.innerHTML = `
       <div>
              <h3>${job.titulo}</h3>
              <small> ${job.empresa} | ${job.ubicacion} |${job.data.nivel} </small>
              <p>
                ${job.descripcion}
              </p>
            </div>
            <button class="button-apply-job">Aplicar</button>
            `;
      jobListingContainer.appendChild(article);
    });
  });
