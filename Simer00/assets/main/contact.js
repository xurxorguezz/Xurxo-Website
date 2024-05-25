const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  let apiSimer00 = new XMLHttpRequest();
  apiSimer00.open('POST', '/');
  apiSimer00.setRequestHeader('content-type', 'application/json');
  apiSimer00.onload = function() {
    console.log(apiSimer00.responseText);
    if (apiSimer00.responseText == 'u+rLg/N6uoLriN6ToTW/hI3HfznffUuvakPdNQdW48Fn7uw= ENIGMA STREAM BASE64 Simer00') {
      alert('Email Sent!');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Something went wrong...')
    }
  }

  apiSimer00.send(JSON.stringify(formData));

})
