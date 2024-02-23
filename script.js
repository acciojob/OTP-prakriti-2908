//your JS code here. If required.
 // Get all OTP input elements
  const inputs = document.querySelectorAll('.code');

  // Add event listener to each input for typing and backspace
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const target = e.target;
      const maxLength = parseInt(target.getAttribute('maxlength'));
      const nextIndex = index === inputs.length - 1 ? index : index + 1;

      if (target.value.length >= maxLength) {
        if (nextIndex < inputs.length) {
          inputs[nextIndex].focus();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      const target = e.target;
      const prevIndex = index === 0 ? index : index - 1;

      if (e.key === 'Backspace' && target.value.length === 0) {
        if (prevIndex >= 0) {
          inputs[prevIndex].focus();
        }
      }
    });
  });