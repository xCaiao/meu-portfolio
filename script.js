document.addEventListener("DOMContentLoaded", function () {
  const habilidades = document.querySelectorAll(".habilidade");

  function mostrarHabilidades() {
    habilidades.forEach((habilidade) => {
      let posicao = habilidade.getBoundingClientRect().top;
      let alturaTela = window.innerHeight;

      if (posicao < alturaTela - 100) {
        habilidade.classList.add("visivel");
      }
    });
  }

  window.addEventListener("scroll", mostrarHabilidades);
  mostrarHabilidades();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function highlightSection() {
    let scrollPosition = window.scrollY + 150;
    sections.forEach((section) => {
      let top = section.offsetTop;
      let bottom = top + section.offsetHeight;
      let heading = section.querySelector("h2");

      if (scrollPosition >= top && scrollPosition <= bottom) {
        heading.classList.add("selecionado");
      } else {
        heading.classList.remove("selecionado");
      }
    });
  }

  window.addEventListener("scroll", highlightSection);
});
