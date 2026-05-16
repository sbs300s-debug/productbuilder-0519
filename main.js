class HairstyleRecommender extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      .recommender {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: var(--bg-color, #fff);
        color: var(--text-color, #333);
      }
      input {
        padding: 0.5rem;
        margin-right: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: var(--bg-color, #fff);
        color: var(--text-color, #333);
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #555;
      }
      .result {
        margin-top: 1rem;
      }
    `;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'recommender');

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your face shape (e.g., oval, round)');
    const button = document.createElement('button');
    button.textContent = 'Get Recommendation';

    form.appendChild(input);
    form.appendChild(button);

    const result = document.createElement('div');
    result.setAttribute('class', 'result');

    wrapper.appendChild(form);
    wrapper.appendChild(result);

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const faceShape = input.value;
      const recommendation = this.getRecommendation(faceShape);
      result.innerHTML = `
        <h3>Recommended Hairstyle</h3>
        <p>${recommendation}</p>
      `;
    });
  }

  getRecommendation(faceShape) {
    if (faceShape.toLowerCase() === 'oval') {
      return 'Long layers';
    } else if (faceShape.toLowerCase() === 'round') {
      return 'Side-swept bangs';
    } else {
      return 'Bob cut';
    }
  }
}

customElements.define('hairstyle-recommender', HairstyleRecommender);

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = 'Dark Mode';
  }
});
