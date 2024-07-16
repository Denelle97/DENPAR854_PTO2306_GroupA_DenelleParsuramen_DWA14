import './components/add-button.js';
import './components/subtract-button.js';
import './components/reset-button.js';

document.addEventListener('DOMContentLoaded', () => {
  const number = document.querySelector('[data-key="number"]');
  const subtractBtn = document.querySelector('subtract-btn');
  const addBtn = document.querySelector('add-btn');
  const resetBtn = document.querySelector('reset-btn');


  let state = {
    count: 0,
    max: 10,
    min: -10,
    status: 'normal'
  };

  /**
   * Updates the UI with the current state
   */
  function updateUI() {
    number.value = state.count;
    number.className = state.status;
  }

  // Event listener for the add button
  addBtn.addEventListener('add', () => {
    if (state.count < state.max) {
      state.count++;
      state.status = state.count === state.max ? 'max-reached' : 'normal';
    }
    updateUI();
  });

  // Event listener for the subtract button
  subtractBtn.addEventListener('subtract', () => {
    if (state.count > state.min) {
      state.count--;
      state.status = state.count === state.min ? 'min-reached' : 'normal';
    }
    updateUI();
  });

  // Event listener for the reset button
  resetBtn.addEventListener('reset', () => {
    state.count = 0;
    state.status = 'normal';
    updateUI();
  });

  // Initial UI update
  updateUI();
});
