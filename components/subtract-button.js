import { LitElement, html, css } from 'https://esm.sh/lit-element';

class SubtractButton extends LitElement {
  static styles = css`
    button {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      font-family: 'Pacifico', cursive;
    }
  `;

  render() {
    return html`<button @click="${this._subtract}">-</button>`;
  }

  _subtract() {
    const event = new CustomEvent('subtract');
    this.dispatchEvent(event);
  }
}

customElements.define('subtract-btn', SubtractButton);