
class HairstyleRecommender extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

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
    // Placeholder logic
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
