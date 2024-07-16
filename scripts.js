import './components/add-button.js';
import './components/subtract-button.js';
import './components/reset-button.js';

document.addEventListener('DOMContentLoaded', () => {
  const number = document.querySelector('[data-key="number"]');

  let state = {
    count: 0,
    max: 10,
    min: 0,
    status: 'normal'
  };

  function updateUI() {
    number.value = state.count;
    number.className = state.status;
  }

  document.querySelector('add-btn').addEventListener('add', () => {
    if (state.count < state.max) {
      state.count++;
      state.status = state.count === state.max ? 'max-reached' : 'normal';
    }
    updateUI();
  });

  document.querySelector('subtract-btn').addEventListener('subtract', () => {
    if (state.count > state.min) {
      state.count--;
      state.status = state.count === state.min ? 'min-reached' : 'normal';
    }
    updateUI();
  });

  document.querySelector('reset-btn').addEventListener('reset', () => {
    state.count = 0;
    state.status = 'normal';
    updateUI();
  });

  updateUI();
});
