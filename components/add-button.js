import { LitElement, html, css } from 'https://esm.sh/lit-element';

class AddButton extends LitElement {
  static styles = css`
    button {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      font-family: 'Pacifico', cursive;
    }
  `;

  render() {
    return html`<button @click="${this._add}">+</button>`;
  }

  _add() {
    const event = new CustomEvent('add');
    this.dispatchEvent(event);
  }
}

customElements.define('add-btn', AddButton);
