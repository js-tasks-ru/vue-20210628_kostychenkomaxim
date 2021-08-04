import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const app = createApp({
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      operation: null,
    };
  },
  computed: {
    result() {
      if (this.operation === 'sum') return this.firstNumber + this.secondNumber;
      if (this.operation === 'subtract') return this.firstNumber - this.secondNumber;
      if (this.operation === 'divide') return this.firstNumber / this.secondNumber;
      return this.firstNumber * this.secondNumber;
    },
  },
}).mount('#app');
