class Footer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
        * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "pokemon", sans-serif;
        text-decoration: none;
        transition: all 0.5s ease;
      }

            * .r6 {
            color: var(--color6);
            }

            footer {
                background-color: var(--color1);
                height: 80px;
                color: var(--color3);
            }
            
            footer .copy-right {
                text-align: center;
                font-size: 12px;
                line-height: 80px;
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            }

        </style>


        <footer>
        <p class="copy-right">
          &copy; Kopi Kanan 2023 | Built with <span class="r6">♥</span> by
          rizkyizh
        </p>
      </footer>
        `;
  }
}

customElements.define('footer-app', Footer);
