const jobListingContainer = document.querySelector(".job-listing");
const paginationNav = document.querySelector(".pagination");
const RESULTS_PER_PAGE = 3;
const currentPage = 1;
// <a href="" class="is-active">1</a>

fetch("./json/data.json") // El fetch es asíncrono
  .then((res) => res.json())
  .then((jobs) => {
    let pages = Math.ceil(jobs.length / RESULTS_PER_PAGE);
    buildPages(pages);
    renderJobs(jobs, currentPage);
  })
  .catch((error) => {
    console.error("Error cargando empleos:", error);
  });

function buildPages(pages) {
  for (let i = 1; i < pages + 1; i++) {
    const pagination = document.createElement("a");

    pagination.textContent = i;
    paginationNav.appendChild(pagination);

    if (i === currentPage) {
      pagination.classList.add("is-active");
    }
  }
}

function renderJobs(jobs, page) {
  const startIndex = (page - 1) * RESULTS_PER_PAGE;
  const pagedJobs = jobs.slice(startIndex, startIndex + RESULTS_PER_PAGE);

  pagedJobs.forEach((job) => {
    buildJobArticle(job);
  });
}

function buildJobArticle(job) {
  const article = document.createElement("article");
  article.className = "job-listing-card";
  article.dataset.modalidad = job.data.modalidad;
  article.dataset.nivel = job.data.nivel;
  article.dataset.technology = JSON.stringify(job.data.technology);

  article.innerHTML = `
       <div>
              <h3>
              ${job.titulo}</h3>
              <small> ${job.empresa} | ${job.ubicacion} | ${job.data.nivel} </small>
              <p>
                ${job.descripcion}
              </p>
            </div>
            <button class="button-apply-job">Aplicar</button>
            `;
  jobListingContainer.appendChild(article);
}
