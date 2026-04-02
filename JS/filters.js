const filtros = document.querySelectorAll(".filter-select");
const resultadoBusquedaTextP = document.querySelector("#resultado-busqueda");
const inputSearch = document.querySelector("#search-input");

const filtrosSeleccionados = {
  modalidad: "",
  technology: "",
  nivel: "",
};
// Filtro selects
filtros.forEach((filtro) => {
  filtro.addEventListener("change", (e) => {
    const jobs = document.querySelectorAll(".job-listing-card");

    //  almacenar todos los filtros seleccionados
    filtrosSeleccionados[filtro.name] = filtro.value;

    // comprobar los filtros seleccionados
    jobs.forEach((job) => {
      const cumpleModalidad =
        job.dataset.modalidad === filtrosSeleccionados.modalidad ||
        filtrosSeleccionados.modalidad === "";
      const cumpleNivel =
        job.dataset.nivel === filtrosSeleccionados.nivel ||
        filtrosSeleccionados.nivel === "";

      const cumpleTechnology =
        job.dataset.technology === filtrosSeleccionados.technology ||
        filtrosSeleccionados.technology === "";

      const mostrar = cumpleModalidad && cumpleNivel && cumpleTechnology;

      // Cambiar la clase en caso de que no se tenga que mostrar
      job.classList.toggle("is-hidden", !mostrar);
    });
  });
});

// Filtro input
inputSearch.addEventListener("input", (e) => {
  let valorIndicado = e.target.value;
  let numeroJobs = 0;
  let numeroJobsSeleccionados = 0;
  document.querySelectorAll(".job-listing-card").forEach((job) => {
    let h3Job = job.querySelector("div > h3");
    const seMuestra = h3Job.textContent
      .toLocaleLowerCase()
      .includes(valorIndicado.toLowerCase());
    job.classList.toggle("is-hidden", !seMuestra);
    numeroJobs += 1;
    if (seMuestra) {
      numeroJobsSeleccionados += 1;
    }
  });

  console.log("Seleccionados: ", numeroJobsSeleccionados, "/", numeroJobs);
});
