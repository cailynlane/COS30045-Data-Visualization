document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.current-year').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = question.getAttribute('aria-expanded') === 'true';
      question.setAttribute('aria-expanded', String(!isOpen));
      answer.classList.toggle('open', !isOpen);
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const form = document.querySelector('#energy-form');
  const results = document.querySelector('#results');
  if (!form || !results) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const power = Number(document.querySelector('#power').value);
    const hours = Number(document.querySelector('#hours').value);
    const price = Number(document.querySelector('#price').value);

    if (!power || power <= 0 || hours < 0 || hours > 24 || price < 0 || Number.isNaN(power) || Number.isNaN(hours) || Number.isNaN(price)) {
      results.innerHTML = '<p class="eyebrow">CHECK YOUR DETAILS</p><h2>Almost there</h2><p class="error">Please enter a positive wattage, between 0 and 24 hours per day, and a non-negative electricity price.</p>';
      return;
    }

    const daily = (power * hours) / 1000;
    const monthly = daily * 30;
    const yearly = daily * 365;
    const monthlyCost = (monthly * price) / 100;
    const yearlyCost = (yearly * price) / 100;
    results.innerHTML = `<p class="eyebrow">YOUR ESTIMATE</p><h2>ദ്ദി(⎚_⎚)</h2><p>At ${hours} hour${hours === 1 ? '' : 's'} a day, this appliance could use:</p><div class="result-grid"><div class="result-item"><small>Daily energy</small><strong>${daily.toFixed(2)} kWh</strong></div><div class="result-item"><small>Monthly energy</small><strong>${monthly.toFixed(1)} kWh</strong></div><div class="result-item"><small>Monthly cost</small><strong>$${monthlyCost.toFixed(2)}</strong></div><div class="result-item"><small>Yearly cost</small><strong>$${yearlyCost.toFixed(2)}</strong></div></div>`;
  });
});
