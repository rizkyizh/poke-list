class AppBar extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
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

    nav {
        height: 80px;
        background-color: var(--color1);
      }
      nav > .navbar-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .navbar-wrapper .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .navbar-wrapper .logo .logo-icon {
        width: 45.76px;
        display: inline-block;
      }
      
      .navbar-wrapper .logo .title-bar {
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 0.3px;
        margin-left: 10.24px;
        display: inline-block;
        color: var(--color3);
      }
      
      .nav-list-wrapper li {
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.3px;
        margin-left: 40px;
        display: inline-block;
      }
      .nav-list-wrapper li > a {
        color: var(--color3);
        text-decoration: none;
      }

    @media (max-width: 960px) {
        .container {
          padding: 0 26px;
        }
    }

    /*==== appbar media query ====*/

    @media (min-width: 790px) {
        .nav-list-wrapper li > a:hover {
          color: var(--color6);
        }
      
        .navbar-wrapper .hamburger-menu {
          display: none;
        }
      }

      /* tablet appbar*/
      @media (max-width: 790px) {
        .navbar-wrapper .hamburger-menu {
          width: 35px;
          height: 35px;
          cursor: pointer;
        }
      
        // .navbar-wrapper .active {
        //   background-image: url("../images/humbuergerMenu-exit.png");
        // }
      
        .nav-list-wrapper {
          position: absolute;
          top: 80px;
          right: 0;
          background-color: var(--color1);
        }
      
        .nav-list-wrapper li {
          display: block;
          width: 200px;
          height: 50px;
          text-align: center;
          margin-left: 0;
        }
      
        .nav-list-wrapper li:hover {
          background-color: var(--color4);
        }
      
        .nav-list-wrapper li a {
          display: block;
          width: inherit;
          height: inherit;
          padding: 15px;
        }
      
        .hidden {
          display: none;
        }
      }
      
      /* mobile appbar */
      @media (max-width: 376px) {
        .navbar-wrapper .logo .title-bar {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.3px;
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

      <nav>
      <div class="container navbar-wrapper">
        <div class="logo">
          <img src="../../images/pokelogoball.png" class="logo-icon" />
          <h2 class="title-bar">
            <span class="r6">POKE</span><span class="r7">LIST</span>
          </h2>
        </div>
        <ul class="nav-list-wrapper hidden">
          <li class="home" id="#"><a href="#">Home</a></li>
          <li class="start" id="#"><a href="#">Start</a></li>
          <li class="about" id="#"><a href="#">About</a></li>
          <li class="contact" id="#"><a href="#">Contact</a></li>
        </ul>
        <div class="hamburger-menu">
            <img src="../../images/humbuergerMenu-exit.png" class="img-toggle hidden"/>
            <img src="../../images/humburgerMenu.png" class="img-toggle-exit "/>
        </div>
      </div>
    </nav>
        `;

    this.event();
  }

  event() {
    this._shadowRoot
      .querySelector(".hamburger-menu")
      ?.addEventListener("click", () => {
        this._shadowRoot
          .querySelector(".nav-list-wrapper")
          ?.classList.toggle("hidden");

        this._shadowRoot
          .querySelector(".img-toggle-exit")
          ?.classList.toggle("hidden");

        this._shadowRoot
          .querySelector(".img-toggle")
          ?.classList.toggle("hidden");
      });
  }
}
customElements.define("app-bar", AppBar);
