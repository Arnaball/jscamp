const filtros = document.querySelectorAll(".filter-select");
const resultadoBusquedaTextP = document.querySelector("#resultado-busqueda");

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
