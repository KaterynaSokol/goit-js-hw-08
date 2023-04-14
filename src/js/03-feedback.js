import throttle from 'lodash.throttle';

const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

let objects = {};
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let objects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadForm();

function onFormInput() {
  objects = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(objects));
  console.log(objects);
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Submit');
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  objects = {};
}

formFields();

function formFields() {
  if (objects) {
    email.value = objects.email || '';
    message.value = objects.message || '';
  }
}
