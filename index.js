const btnCategorias = document.getElementById("btnCategorias");
const barraCategorias = document.getElementById("barraCategorias");

btnCategorias.addEventListener("click", () => {
    const isHidden = barraCategorias.classList.contains("oculto");
    barraCategorias.classList.toggle("oculto");
    btnCategorias.setAttribute("aria-expanded", isHidden ? "true" : "false");
});
