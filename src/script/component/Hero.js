import heroDisplay from '../../images/hero.svg';
import heroMobile from '../../images/mobile-pikachhu.svg';
import btnStartHover from '../../images/home-start-btn-Hover.svg';
import btnStart from '../../images/home-start-btn.svg';

class Hero extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this.render();
    this.styles = `
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    .container {
        max-width: 960px;
        margin: auto;
        height: inherit;
    }

    * .r6 {
    color: var(--color6);
  }
  
  * .r7 {
    color: var(--color7);
  }

    .hero {
        background-color: var(--color2);
        min-height: 580px;
        padding-bottom: 32px;
      }
      
      .hero .hero-bg {
        /* bg pikachu */
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: 38px;
        min-height: 580px;
      }
      
      .hero-wrapper {
        padding-top: 100px;
      }
      
      .hero-content .title {
        font-size: 40px;
        line-height: 60px;
        letter-spacing: 0.3px;
        font-style: normal;
        font-weight: 400;
        color: var(--color4);
        margin-bottom: 32px;
      }
      
      .hero-content .description {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        /* or 162% */
        margin-bottom: 32px;
        color: var(--color4);
      }
      
      .hero-content .cta {
        background-image: url("${btnStart}");
        background-repeat: no-repeat;
        background-position: center;
        width: 200px;
        height: 50px;
        cursor: pointer;
      }
      .hero-content .cta:hover {
        background-image: url("${btnStartHover}");
        z-index: 1;
      }
      
      
      
      /* hero */
      
      /* tablet 1 */
      @media (max-width: 960px) {
        .hero .hero-bg {
          margin-right: 26px;
        }
      
        .hero-content .description {
          font-size: 12px;
        }
      }
      
      /* tablet 2 */
      @media (max-width: 790px) {
        .hero-wrapper {
          padding-top: 50px;
        }
      
        .hero-content .title {
          font-size: 30px;
          line-height: 60px;
        }
        .hero .hero-bg {
          /* bg pikachu */
          background-size: 520px;
        }
      }
      
      /* tablet 3 switch bg*/
      @media (max-width: 746px) {
        .hero .hero-bg {
          margin-right: 0;
          text-align: center;
        }
      
        .hero-content .cta {
          margin: auto;
          width: 150px;
          height: 37.5px;
        }
        .hero-content::before {
          content: "";
          display: inline-block;
          width: 200px;
          height: 200px;
          background-image: url(${heroMobile});
          background-repeat: no-repeat;
        }
      }
      
      @media (min-width: 746px) {
        .hero .hero-bg {
          /* bg pikachu */
          background-image: url(${heroDisplay});
        }
      
        .hero-wrapper {
          padding-right: 300px;
        }
        .hero-wrapper .hero-content {
          max-width: 557px;
        }
      }
      
      /* mobile appbar */
      @media (max-width: 376px) {
        .hero-content .title {
          font-size: 24px;
          overflow-wrap: break-word;
        }
      }

      /* global media query */
    @media (max-width: 960px) {
    .container {
    padding: 0 26px;
    }
}
      
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      
      <style>
      ${this.styles}
      </style>



    <section class="hero">
        <div class="container hero-bg">
          <div class="hero-wrapper">
            <div class="hero-content">
              <h1 class="title">PIKACHU...!!!</h1>
              <p class="description">
                <span class="r7">Web App</span> ini menampilkan daftar informasi
                character dalam semesta pokémon dengan menggunakan
                <span class="r6">RESTful pokémon API</span>. Web ini dibangun
                untuk memenuhi submission atau tugas akhir Belajar Fundamental
                Front-End Web Development di Dicoding Academy
              </p>
              <div class="cta" href="./start.html"></div>
            </div>
          </div>
        </div>
      </section>
    `;
    this.event();
  }

  event() {
    const startButton = this._shadowRoot.querySelector('.cta');
    startButton?.addEventListener('click', () => {
      const href = startButton.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  }
}

customElements.define('hero-app', Hero);
