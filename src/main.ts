import { defineCustomElement } from 'vue'
import App from './App.ce.vue'
import './style.css'

const CheckoutElement = defineCustomElement(App);
customElements.define('store-checkout-wc', CheckoutElement);
