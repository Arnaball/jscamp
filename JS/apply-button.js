const seccionEmpleos = document.querySelector(".job-listing");

seccionEmpleos?.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.classList.add("is-applied");
    element.textContent = "Aplicado!";
    element.disabled = true;
  }
});
