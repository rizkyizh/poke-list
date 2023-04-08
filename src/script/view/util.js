import DataSource from "../controller/DataSource.js";

const countResults = (pokemonList) => {
  const footerContent = document.querySelector(".content-footer");
  const referenceEl = footerContent?.children[3];

  const countEl = document.createElement("p");
  countEl.setAttribute("class", "count-result");

  const countPokeman = pokemonList.count;

  countEl.innerHTML = `count: ${countPokeman}`;

  // @ts-ignore
  footerContent?.insertBefore(countEl, referenceEl);
};

const renderPokeCard = (pokemonList) => {
  const cardField = document.querySelector(".content-main");
  const namaHoverEl = document.querySelector(".name-hover");

  // @ts-ignore
  cardField.innerHTML = "";
  let els;

  pokemonList.results.forEach((e, i) => {
    const pokemonName = e.name;
    const pokemonId = e.url;

    DataSource.getPokemonImgPNG(pokemonId, (img) => {
      const card = `
                <div class="poke-card" dataId="${pokemonName}" >
                <img src="${img}" />
                <div class="poke-name">
                <p>${pokemonName}</p>
                </div>
                </div>`;

      cardField?.insertAdjacentHTML("beforeend", card);

      let cardEl = document.querySelectorAll(".poke-card");
      cardEl.forEach((e) => {
        e.addEventListener("mouseover", function () {
          const namaPoke = e.getAttribute("dataId");
          // @ts-ignore
          namaHoverEl.innerHTML = namaPoke;
        });
        e.addEventListener("click", function () {
          console.log(e.getAttribute("dataId"));
        });
      });
    });
  });
};

const hoverCard = () => {
  const cardEl = document.querySelector(".poke-card");
  console.log(cardEl);

  //   cardEl?.addEventListener("click", function () {
  //     console.log("ok");
  //     const cek = cardEl.getAttribute("dataId");
  //     console.log(cek);
  //   });
};

export { countResults, renderPokeCard, hoverCard };
