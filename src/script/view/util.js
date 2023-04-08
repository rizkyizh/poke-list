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
  const colorType = {
    fire: "#ee8130",
    grass: "#7ac74c",
    electric: "#f7d02c",
    water: "#6390f0",
    ground: "#e2bf65",
    rock: "#b6a136",
    fairy: "#d685ad",
    poison: "#a33ea1",
    bug: "#a6b91a",
    dragon: "#6f35fc",
    psychic: "#f95587",
    flying: "#a98ff3",
    fighting: "#c22e28",
    normal: "#a8a77a",
    ice: "#96d9d6",
    ghost: "#735797",
    dark: "#705746",
    steel: "#b7b7ce",
  };

  // @ts-ignore
  cardField.innerHTML = "";
  let els;

  pokemonList.results.forEach((e, i) => {
    const pokemonName = e.name;
    const pokemonId = e.url;

    DataSource.getPokemonURLID(pokemonId, (res) => {
      const img = res.sprites["front_default"];
      const bgColorType = colorType[res.types[0].type.name];
      const card = `
                <div class="poke-card" dataId="${pokemonName}" style="background-color:${bgColorType}" >
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

const renderCardSearch = (res) => {
  const cardField = document.querySelector(".content-main");
  const namaHoverEl = document.querySelector(".name-hover");
  // @ts-ignore
  cardField.innerHTML = "";
  const colorType = {
    fire: "#ee8130",
    grass: "#7ac74c",
    electric: "#f7d02c",
    water: "#6390f0",
    ground: "#e2bf65",
    rock: "#b6a136",
    fairy: "#d685ad",
    poison: "#a33ea1",
    bug: "#a6b91a",
    dragon: "#6f35fc",
    psychic: "#f95587",
    flying: "#a98ff3",
    fighting: "#c22e28",
    normal: "#a8a77a",
    ice: "#96d9d6",
    ghost: "#735797",
    dark: "#705746",
    steel: "#b7b7ce",
  };
  const img = res.sprites["front_default"];
  const bgColorType = colorType[res.types[0].type.name];
  const pokemonName = res.forms[0].name;

  let card = `
              <div class="poke-card" dataId="${pokemonName}" style="background-color:${bgColorType}" >
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
};

const renderError = (error) => {
  const contentMain = document.querySelector(".content-main");
  // @ts-ignore
  contentMain.innerHTML = error;
};

export { countResults, renderPokeCard, renderCardSearch, renderError };
