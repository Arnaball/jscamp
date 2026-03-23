const seccionEmpleos = document.querySelector('.job-listing');

const filtros = document.querySelectorAll('.filter-select');

const searchInput = document.querySelector('#search-input');

const searchForm = document.querySelector('#empleos-search-form');

const jobs = document.querySelectorAll('.job-card');

const resultadoBusqueda = document.querySelector('#resultado-busqueda');

seccionEmpleos?.addEventListener('click' , (event) => {
    const element = event.target; 
    if(element.classList.contains('button-apply-job')) { 
        element.classList.add('is-applied');
        element.textContent = 'Aplicado!';
        element.disabled = true;
     }
})


filtros.forEach(filtro => {
    filtro.addEventListener('change' , (e) => {
    
    const valorSeleccionado = filtro.value;

    if (valorSeleccionado) {
        console.log('has seleccionado: ' , valorSeleccionado) // loguea el valor que se selecciona del filtro
        resultadoBusqueda.textContent = `Has seleccionado: ${valorSeleccionado}`;
    }

   jobs.forEach(job => {
        const tecnologia = job.dataset.tecnologia; // loguea la tecnologia del job que está almacenando
        // También se puede utilizar job.getAttribute('data-tecnologia')


        if(tecnologia === valorSeleccionado || valorSeleccionado === '') {
            job.style.display = 'flex';
        } else {
            job.style.display = 'none';
        }
   });
})
})



