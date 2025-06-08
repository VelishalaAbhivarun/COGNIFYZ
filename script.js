document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = this.querySelector('input[type="text"]');
    const name = nameInput.value.trim();

    if (name) {
      alert(`Thank you, ${name}! Your form has been submitted.`);
      nameInput.value = '';
    }
  });
});