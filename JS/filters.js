const filtros = document.querySelectorAll(".filter-select");
const resultadoBusquedaTextP = document.querySelector("#resultado-busqueda");
const inputSearch = document.querySelector("#search-input");
const jobCards = document.querySelector(".jobLIsting");

let jobsTitles = [];
let jobsArticles = [];

function getJobs() {
  jobsArticles = [];
  jobsTitles = [];

  const jobArticles = document.querySelectorAll(".job-listing-card");

  jobArticles.forEach((jobArticle) => {
    const jobsH3 = jobArticle.querySelector("div > h3");
    jobsTitles.push(jobsH3.textContent);
    jobsArticles.push(jobArticle);
  });
}

filtros.forEach((filtro) => {
  filtro.addEventListener("change", (e) => {
    const jobs = document.querySelectorAll(".job-listing-card");

    const valorSeleccionado = filtro.value;
    console.log("Se ha tratado de filtrar");
    if (valorSeleccionado) {
      console.log("has seleccionado: ", valorSeleccionado); // loguea el valor que se selecciona del filtro
      resultadoBusquedaTextP.textContent = `Has seleccionado: ${valorSeleccionado}`;
    }

    jobs.forEach((job) => {
      console.log("job");
      const tecnologia = job.dataset.tecnologia; // loguea la tecnologia del job que está almacenando
      const seMuestra =
        valorSeleccionado === "" || valorSeleccionado === tecnologia;
      job.classList.toggle("is-hidden", !seMuestra);
    });
  });
});

inputSearch.addEventListener("focus", () => {
  getJobs();
});

inputSearch.addEventListener("input", (e) => {
  let valorIndicado = e.target.value;

  jobsTitles.forEach((jobTitle) => {
    jobsArticles.forEach((jobArticle) => {
      console.log(jobTitle);
      const seMuestra = jobTitle.includes(valorIndicado);
      jobArticle.classList.toggle("is-hidden", !seMuestra);
    });
  });
});
