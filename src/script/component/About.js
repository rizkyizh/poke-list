class About extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.styles = `
    * .r6 {
    color: var(--color6);
    }
    
    * .r7 {
        color: var(--color7);
    } 
  
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "pokemon", sans-serif;
        text-decoration: none;
        transition: all 0.5s ease;
    }
    

    .container {
        max-width: 960px;
        margin: auto;
        height: inherit;
    }
    @media (max-width: 960px) {
        .container {
          padding: 0 26px;
        }
      }

    
 .about-wrapper {
    display: flex;
    justify-content: space-between;
  }
  
  .about-wrapper .about {
    min-height: 477px;
    background-color: var(--color1);
    padding: 20px;
  }
  
  .about .title-about {
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    letter-spacing: 0.3px;
    color: var(--color3);
    text-align: center;
    background-color: var(--color2);
  }
  
  .about img {
    display: block;
    max-width: 236px;
    margin: 20px auto;
  }
  
  .about .description-about {
    line-height: 20px;
    color: var(--color3);
    font-size: 10px;
  }
  
  .about .description-about-2 {
    line-height: 20px;
    font-size: 10px;
    color: var(--color3);
    margin: 20px 0;
  }
  
  .about .status-link {
    font-size: 8px;
  }
  
  /* about end  */
  
  /* It's me start */
  
  .about-wrapper .isme-wrapper {
    /* width: 300px; */
    min-height: 477px;
    background-color: var(--color1);
    padding: 20px;
    color: var(--color3);
    text-align: center;
  }
  
  .isme-wrapper .title-isme {
    display: block;
    font-size: 12px;
    margin: 0 auto 28px auto;
  }
  
  .isme-wrapper .bio-wrapper {
    height: 373px;
    background-color: var(--color2);
  }
  
  .bio-wrapper .photo-profil {
    width: 125px;
    margin-top: 25px;
  }
  
  .bio-wrapper .name {
    font-size: 10px;
    margin-top: 15px;
  }
  
  .bio-wrapper .address {
    font-size: 8px;
    margin-top: 10px;
  }
  
  .bio-wrapper .sosmed-wrapper {
    margin: 20px;
  }
  
  .bio-wrapper .sosmed-wrapper li {
    list-style: none;
    display: inline-block;
  }
  .sosmed-wrapper li img {
    width: 27.79px;
  }
  
  .bio-wrapper .btn-repo {
    border: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;
  }
  
  .btn-repo img {
    cursor: pointer;
    width: 160px;
  }
  
  /* It's me end */
  
  /* about */
  @media (min-width: 790px) {
    .about-wrapper .about {
      width: 600px;
      margin-right: 20px;
    }
  }
  
  @media (max-width: 790px) {
    .about-wrapper {
      flex-direction: column;
    }
  
    .about-wrapper .about {
      margin-bottom: 25px;
    }
  
    .about-wrapper .isme-wrapper {
      margin: auto;
    }
  }
  
  @media (min-width: 375px) {
    .about-wrapper .isme-wrapper {
      width: 300px;
    }
  }
  
  @media (max-width: 375px) {
    .about-wrapper .isme-wrapper {
      width: 100%;
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

        <div class="container">
        <div class="about-wrapper">
          <article class="about">
            <p class="title-about">Credit</p>
            <img src="../images/pokeapi.png" alt="pokeapi" />
            <p class="description-about">
              <a href="https://pokeapi.co/" target="_blank"
                ><span class="r6">PokeAPI</span></a
              >
              adalah RESTful API (Application Programming Interface) yang
              menyediakan data lengkap tentang Pokemon, termasuk detail tentang
              setiap Pokemon, gerakan, lokasi, dan lain-lain. Website yang
              menggunakan PokeAPI biasanya mengakses data tersebut untuk membuat
              pokedex digital atau untuk memberikan informasi tentang Pokemon
              secara online.
            </p>
            <p class="description-about-2">
              API ini dibuat oleh
              <a href="https://phalt.github.io/" target="_blank" class="r7"
                >Paul Hallett</a
              >
              dan kontributor PokéAPI lainnya di seluruh dunia. Nama karakter
              Pokemon dan Pokemon adalah merek dagang dari Nintendo.
            </p>
            <p class="status-link">
              <a
                href="https://pokeapi.statuspage.io/"
                target="_blank"
                class="r7"
                >status | All Systems Operasional</a
              >
            </p>
          </article>
          <aside class="isme-wrapper">
            <p class="title-isme">It's Me</p>
            <div class="bio-wrapper">
              <img class="photo-profil" src="../images/photo.png" alt="pp" />
              <p class="name">Rizki Izzul Haq</p>
              <p class="address">Jawa Tengah - Indonesia</p>
              <ul class="sosmed-wrapper">
                <li>
                  <a href="http://twitter.com/rizkyizh_" target="_blank"
                    ><img src="../images/twit.png" alt="twitter"
                  /></a>
                </li>
                <li>
                  <a href="http://facebook.com/moekanaeru" target="_blank"
                    ><img src="../images/fb.png" alt="fb"
                  /></a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/rizky.izh"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src="../images/ig.png" alt="ig"
                  /></a>
                </li>
                <li>
                  <a href="http://" target="_blank"
                    ><img src="../images/mail.png" alt="email"
                  /></a>
                </li>
              </ul>
              <button class="btn-repo">
                <a href="http://github.com/rizkyizh" target="_blank"
                  ><img src="../images/githubrepo.png" alt="repo-github"
                /></a>
              </button>
            </div>
          </aside>
        </div>
      </div>
        
        `;
  }
}

customElements.define("about-app", About);
