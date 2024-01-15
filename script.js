var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

var form = document.getElementById('my-form');
var contactForm = document.getElementById('contact-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML =
        "Thanks for choosing Genius Tutors Academy!. You'll be contacted shortly.";
      status.classList.add('success');
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
      status.classList.add('error');
    });
}

async function handleContact(event) {
  event.preventDefault();
  var status = document.getElementById('status');
  var data = new FormData(event.target);
  var contact = document.getElementById('contact-btn');
  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      contact.innerHTML = 'Thanks for contacting Genius Tutors!';
      contact.classList.add('success');
      contactForm.reset();
    })
    .catch((error) => {
      contact.innerHTML = 'Retry';
      contact.classList.add('error');
    });
}
form.addEventListener('submit', handleSubmit);
contactForm.addEventListener('submit', handleContact);
