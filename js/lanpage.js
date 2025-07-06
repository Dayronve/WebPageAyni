const Quienessomos = document.querySelector("#Quienessomos")
Quienessomos.addEventListener("click", (g) => {
    g.preventDefault();
    const Sectiong = document.querySelector(".Quienessomos");
    Sectiong.scrollIntoView({behavior: "smooth"});


})

const Sobrenosotros = document.querySelector("#Sobrenosotros")
Sobrenosotros.addEventListener("click", (g) => {
    g.preventDefault();
    const Sectiong = document.querySelector(".Sobrenosotros");
    Sectiong.scrollIntoView({behavior: "smooth"});


})