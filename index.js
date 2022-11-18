console.log('test server started');

const contactButton = document.getElementById('text-for-ga4');

contactButton.addEventListener('click', (e) => {
  e.preventDefault();
  // Send event to GA4
  gtag('event', 'click', {
    event_category: 'contact',
    event_label: 'contact button',
    value: 1,
  });
  console.log('Contact button clicked');
});
