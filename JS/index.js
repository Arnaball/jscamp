const seccionEmpleos = document.querySelector(".job-listing");

const filtros = document.querySelectorAll(".filter-select");

const searchInput = document.querySelector("#search-input");

const searchForm = document.querySelector("#empleos-search-form");

const resultadoBusqueda = document.querySelector("#resultado-busqueda");

const jobListingContainer = document.querySelector(".job-listing");

seccionEmpleos?.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.classList.add("is-applied");
    element.textContent = "Aplicado!";
    element.disabled = true;
  }
});

filtros.forEach((filtro) => {
  filtro.addEventListener("change", (e) => {
    const jobs = document.querySelectorAll(".job-listing-card");

    const valorSeleccionado = filtro.value;
    console.log("Se ha tratado de filtrar");
    if (valorSeleccionado) {
      console.log("has seleccionado: ", valorSeleccionado); // loguea el valor que se selecciona del filtro
      resultadoBusqueda.textContent = `Has seleccionado: ${valorSeleccionado}`;
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
