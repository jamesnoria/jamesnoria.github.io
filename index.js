console.log('test server started');

const contactButton = document.getElementById('text-for-ga4');

contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Contact button clicked');
});
