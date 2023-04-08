import "../../images/nextButton.png";
import DataSource from "../controller/DataSource.js";
import { countResults, renderPokeCard, hoverCard } from "../view/util.js";

const main = () => {
  DataSource.getPokemonList(renderPokeCard, "pokemon/?offset=0&limit=12");
  DataSource.getPokemonList(countResults, "pokemon/?offset=0&limit=12");

  const renderNextPreviousPokeList = (offset) => {
    DataSource.getPokemonList(
      renderPokeCard,
      `pokemon/?offset=${offset}&limit=12`
    );
  };

  // ======================================================================
  const btnNext = document.querySelector(".next-button");
  const btnPrevious = document.querySelector(".previous-button");
  const pagesNumbers = document.querySelectorAll(".page-number");

  const nextPreviousPage = () => {
    const pagesMap = [0, 0, 1, 2, 3];
    let offset = 0;
    btnNext?.addEventListener("click", function () {
      let last = pagesMap[pagesMap.length - 1];
      pagesMap.push(last + 1);
      pagesMap.shift();
      PagesNextPreviousDisplay(pagesMap);
      offset += 12;
      renderNextPreviousPokeList(offset);
    });
    btnPrevious?.addEventListener("click", function () {
      let first = pagesMap[0];
      if (first && pagesMap[1] != 0) {
        pagesMap.unshift(first - 1);
        pagesMap.pop();
        offset -= 12;
        PagesNextPreviousDisplay(pagesMap);
        renderNextPreviousPokeList(offset);
      } else if (pagesMap[0] == 0 && pagesMap[1] == 1) {
        pagesMap.unshift(0);
        pagesMap.pop();
        PagesNextPreviousDisplay(pagesMap);
        offset -= 12;
        renderNextPreviousPokeList(offset);
      }
    });
  };

  const PagesNextPreviousDisplay = (pages) => {
    if (pages != undefined) {
      pages.forEach((e, i) => {
        pagesNumbers[i].innerHTML = e.toString();
      });
      if (pages[2] == 1) {
        pagesNumbers[0].innerHTML = "";
        pagesNumbers[1].innerHTML = "";
      }

      if (pages[2] == 2) {
        pagesNumbers[0].innerHTML = "";
      }
    }
  };

  nextPreviousPage();
  // hoverCard();

  // const cardEl = document.querySelector(".poke-name");

  // cardEl?.addEventListener("click", function () {
  //   console.log("ok");
  //   const cek = cardEl.getAttribute("dataId");
  //   console.log(cek);
  // });
};

export default main;
