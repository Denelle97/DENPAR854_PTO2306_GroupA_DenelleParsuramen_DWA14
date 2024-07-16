import { LitElement, html, css } from 'https://esm.sh/lit-element';

class ResetButton extends LitElement {
  static styles = css`
    button {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      font-family: 'Pacifico', cursive;
    }
  `;

  render() {
    return html`<button @click="${this._reset}">Reset</button>`;
  }

  _reset() {
    const event = new CustomEvent('reset');
    this.dispatchEvent(event);
  }
}

customElements.define('reset-btn', ResetButton);
