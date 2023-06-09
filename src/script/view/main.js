import btnNextPrevious from '../../images/nextButton.png';
import searchBtn from '../../images/searchbutton.png';
import favicon from '../../images/favicon.png';
import DataSource from '../controller/DataSource.js';
import { countResults, renderPokeCardList, searchPokeByIdName } from './util.js';

const main = () => {
  const head = document.querySelector('head');
const link = document.createElement('link');

link.rel = 'shortcut icon';
link.href = `${favicon}`;

head.appendChild(link);

  const btnSearchEl = document.querySelector('.searchbutton');
  btnSearchEl?.setAttribute('src', searchBtn);

  DataSource.getPokemonList(renderPokeCardList, 'pokemon/?offset=0&limit=12');
  DataSource.getPokemonList(countResults, 'pokemon/?offset=0&limit=12');

  const renderNextPreviousPokeList = (offset) => {
    DataSource.getPokemonList(
      renderPokeCardList,
      `pokemon/?offset=${offset}&limit=12`,
    );
  };

  const btnNext = document.querySelector('.next-button');
  const btnPrevious = document.querySelector('.previous-button');
  const pagesNumbers = document.querySelectorAll('.page-number');
  btnNext?.setAttribute('src', btnNextPrevious);
  btnPrevious?.setAttribute('src', btnNextPrevious);

  const pagesNextPreviousDisplay = (pages) => {
    if (pages !== undefined) {
      pages.forEach((e, i) => {
        pagesNumbers[i].innerHTML = e.toString();
      });
      if (pages[2] === 1) {
        pagesNumbers[0].innerHTML = '';
        pagesNumbers[1].innerHTML = '';
      }

      if (pages[2] === 2) {
        pagesNumbers[0].innerHTML = '';
      }
    }
  };

  const nextPreviousPage = () => {
    const pagesMap = [0, 0, 1, 2, 3];
    let offset = 0;
    btnNext?.addEventListener('click', () => {
      const last = pagesMap[pagesMap.length - 1];
      pagesMap.push(last + 1);
      pagesMap.shift();
      pagesNextPreviousDisplay(pagesMap);
      offset += 12;
      renderNextPreviousPokeList(offset);
    });
    btnPrevious?.addEventListener('click', () => {
      const first = pagesMap[0];
      if (first && pagesMap[1] !== 0) {
        pagesMap.unshift(first - 1);
        pagesMap.pop();
        offset -= 12;
        pagesNextPreviousDisplay(pagesMap);
        renderNextPreviousPokeList(offset);
      } else if (pagesMap[0] === 0 && pagesMap[1] === 1) {
        pagesMap.unshift(0);
        pagesMap.pop();
        pagesNextPreviousDisplay(pagesMap);
        offset -= 12;
        renderNextPreviousPokeList(offset);
      }
    });
  };

  nextPreviousPage();
  searchPokeByIdName();
};

export default main;
