const filtros = document.querySelectorAll(".filter-select");
const resultadoBusquedaTextP = document.querySelector("#resultado-busqueda");
const inputSearch = document.querySelector("#search-input");

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

inputSearch.addEventListener("input", (e) => {
  let valorIndicado = e.target.value;

  document.querySelectorAll(".job-listing-card").forEach((job) => {
    let h3Job = job.querySelector("div > h3");
    const seMuestra = h3Job.textContent.includes(valorIndicado);
    job.classList.toggle("is-hidden", !seMuestra);
  });
});
