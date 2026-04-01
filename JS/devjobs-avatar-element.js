class DevJobsAvatar extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de HTMLElement para que podamos utilzarlo
    this.attachShadow({ mode: "open" }); // Encapsula nuestro componente para que no se vea afectado por estilos externos y viceversa
  }

  render() {
    const service = this.getAttribute("service") ?? "github"; // Si es nulo o undefined utiliza por defecto lo que hay detrás de las ??
    const name = this.getAttribute("name") ?? "midudev";
    const size = this.getAttribute("size") ?? "40";

    const URL = this.createURL(service, name);

    this.shadowRoot.innerHTML = `
        <img
        src = ${URL}
        alt="Imagen de perfil"
        class="avatar"
        style="width: ${size}px; height: ${size}px; border-radius: 50%;"
      />
    `;
  }

  createURL(service, name) {
    return `"https://unavatar.io/${service}/${name}"`;
  }

  // Esto hace que cuando el componente aparezca en el ordenador  renderice lo de arriba
  connectedCallback() {
    this.render();
  }
}

customElements.define("dev-jobs-avatar", DevJobsAvatar);
