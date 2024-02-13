function toggleActiveClass() {
  // Get the button element by its ID
  const button = document.getElementById('myButton');

  // Toggle the "active" class on the button element
  button.classList.toggle('active');
}

// Add a click event listener to the button element
document
  .getElementById('myButton')
  .addEventListener('click', toggleActiveClass);
