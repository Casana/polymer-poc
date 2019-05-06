import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-login`
 * Login reusable web component test
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>This is [[prop1]] web component</h2>
      <form name="loginForm" method="POST">
        <fieldset>
          <legend></legend>
          <span></span>
          <div>
            <label for="user">Usuario</label>
            <input type="text" name="user"></input>
          </div>
          <div>
            <label for="password">Contraseña</label>
            <input type="text" name="password"></input>
          </div>
          <a></a>
        </fieldset>
        <input type="submit" value="Entrar"></input>
        <a target='_blank' href="javascript:void(0)">¿Todavía no eres usuario? Regístrate</a>
      </form>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-login',
      },
    };
  }
}

window.customElements.define('my-login', MyLogin);
