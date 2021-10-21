import { LitElement, html } from 'lit-element';
import '@lion/button/lion-button';

class MyComponent extends LitElement {
  static get properties() {
    return {
      someBoolean: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.someBoolean = true;
  }

  render() {
    return html`
      <button @click=${() => {
        this.someBoolean = !this.someBoolean;
      }}>Toggle state</button>
      <lion-button tabindex="1" ?disabled=${this.someBoolean}>I'm ${this.someBoolean ? 'disabled' : 'enabled'}</lion-button>
    `;
  }
}
customElements.define('my-component', MyComponent);