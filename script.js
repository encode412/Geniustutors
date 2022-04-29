var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800
});


// var loader = document.querySelector('.loader-bg')
// setTimeout(function() {
// 	$('.loader-bg').fadeToggle();
// }, 4000);

/*<form id="my-form" action="https://formspree.io/f/xzbylkqp" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form>
<!-- Place this script at the end of the body tag -->
<script>*/
    var form = document.getElementById("my-form");
    var contactForm = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks!";
        status.classList.add('success');
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add('error')
      });
    }

    async function handleContact(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      var contact = document.getElementById('contact-btn');
      fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        contact.innerHTML = "Thanks!";
        contact.classList.add('success');
        contactForm.reset()
      }).catch(error => {
      contact.innerHTML = "Retry"
      contact.classList.add('error')  
      });
    }
    form.addEventListener("submit", handleSubmit)
    contactForm.addEventListener("submit", handleContact)