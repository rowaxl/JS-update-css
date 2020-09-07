const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  // get suffix of data('px' or empty for color)
  const suffix = e.target.dataset.sizing || '';
  const { name, value } = e.target;

  // update style variable
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
