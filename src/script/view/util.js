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

const renderDetailStatCard = ({
  sprites: {
    other: {
      dream_world: { front_default: img },
    },
  },
  name,
  id,
  height,
  weight,
  types: [
    {
      type: { name: type },
    },
  ],
  stats,
  abilities: [
    {
      ability: { name: ability, url: urlEffectShort },
    },
  ],
}) => {
  const [hp, atk, def, spAtk, spDef, speed] = stats.map(
    ({ base_stat }) => base_stat
  );

  const imgEl = document.querySelector(".desc-img");
  const nameEl = document.querySelector(".desc-name");
  const tableStatsEl = document.querySelector(".table-wrapper");
  imgEl?.setAttribute("src", img);
  // @ts-ignore
  nameEl.innerHTML = name;

  DataSource.getPokemonURLID(
    urlEffectShort,
    ({ effect_entries: [{ short_effect: describeEffect }] }) => {
      // field
      // @ts-ignore
      tableStatsEl.innerHTML = "";
      const statsEL = `
      <tbody>
            <tr>
              <td><span class="r7">Id : </span>${id}</td>
              <td><span class="r7">Height : </span>${height}</td>
            </tr>
            <tr>
              <td><span class="r7">Type : </span>${type}</td>
              <td><span class="r7">Weight : </span>${weight}</td>
            </tr>
            <tr>
              <td><span class="r6">Hp : </span>${hp}</td>
              <td><span class="r6">Atk : </span>${atk}</td>
            </tr>
            <tr>
              <td><span class="r6">Def : </span>${def}</td>
              <td><span class="r6">Sp. Atk : </span>${spAtk}</td>
            </tr>
            <tr>
              <td><span class="r6">Sp. Def : </span>${spDef}</td>
              <td><span class="r6">Spd : </span>${speed}</td>
            </tr>
            <tr class="border-bottom-tr">
              <td colspan="2"><span class="r5">Ability : </span>${ability}</td>
            </tr>
            <tr>
              <td colspan="2">${describeEffect}</td>
            </tr>
        </tbody>`;
      tableStatsEl?.insertAdjacentHTML("beforeend", statsEL);
    }
  );
};

const renderCard = (res) => {
  const cardField = document.querySelector(".content-main");
  const namaHoverEl = document.querySelector(".name-hover");
  // @ts-ignore
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
  const pokemonId = res.id;

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
      const pokeNameId = e.getAttribute("dataId");

      DataSource.getPokemonURLID(
        `https://pokeapi.co/api/v2/pokemon/${pokeNameId}`,
        renderDetailStatCard
      );

      return;
    });
  });
};

const renderPokeCardList = (pokemonList) => {
  const cardField = document.querySelector(".content-main");
  // @ts-ignore
  cardField.innerHTML = "";

  pokemonList.results.forEach((e, i) => {
    const pokemonURL = e.url;
    DataSource.getPokemonURLID(pokemonURL, renderCard);
  });
};

const renderError = (error) => {
  const contentMain = document.querySelector(".content-main");
  const messageWrapper = document.createElement("div");
  const pMessage = document.createElement("p");
  const imgNotFound = document.createElement("img");
  messageWrapper.setAttribute("class", "error-message");
  pMessage.innerHTML = "404 Not Found";
  imgNotFound.setAttribute("src", "../images/mobile-pikachhu.png");
  // @ts-ignore
  messageWrapper.appendChild(imgNotFound);
  messageWrapper.appendChild(pMessage);
  contentMain?.append(messageWrapper);
};

const searchPokeByIdName = () => {
  const btnSearchEl = document.querySelector("input");
  const btnSubmit = document.querySelector("button[type=submit]");
  const cardField = document.querySelector(".content-main");
  btnSubmit?.addEventListener("click", function () {
    const id = btnSearchEl?.value;
    if (id == "") {
      // @ts-ignore
      cardField.innerHTML = "";
      renderError("data is not found");
    } else {
      // @ts-ignore
      cardField.innerHTML = "";
      DataSource.getPokemonURLID(
        `https://pokeapi.co/api/v2/pokemon/${id}/`,
        renderCard,
        renderError
      );
    }
  });
};

export { countResults, renderPokeCardList, renderCard, searchPokeByIdName };
