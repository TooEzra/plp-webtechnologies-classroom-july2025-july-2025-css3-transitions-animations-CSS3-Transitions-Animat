// Function to animate box on button click
function animateBox() {
  const box = document.querySelector('#card');
  box.classList.toggle('flipped');
  return box.classList.contains('flipped');
}

// Function to toggle loader visibility
function toggleLoader(state) {
  const loader = document.querySelector('#loader');
  loader.style.display = state ? 'block' : 'none';
  return loader.style.display;
}

// Function to show/hide modal
function controlModal(action) {
  const modal = document.querySelector('#modal');
  if (action === 'show') {
    modal.style.display = 'block';
  } else if (action === 'hide') {
    modal.style.display = 'none';
  }
  return modal.style.display;
}

// Event listeners
document.getElementById('animateBtn').addEventListener('click', animateBox);
document.getElementById('toggleLoader').addEventListener('click', () => toggleLoader(document.getElementById('loader').style.display === 'none'));
document.getElementById('showModal').addEventListener('click', () => controlModal('show'));
document.getElementById('closeModal').addEventListener('click', () => controlModal('hide'));

// Demonstrate scope with a local variable
function demoScope() {
  let localVar = 'I am local';
  console.log(localVar);
  return localVar;
}
demoScope();