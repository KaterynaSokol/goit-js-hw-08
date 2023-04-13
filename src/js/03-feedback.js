import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const objects = {};

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  objects[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objects));
  console.log(objects);
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Submit');
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(objects);
}

formFields();

function formFields() {
  const saveMessage = localStorage.getItem('feedback-form-state');
  if (saveMessage) {
    const parseSavedMessage = JSON.parse(saveMessage);
    emailInput.value = parseSavedMessage.email;
    messageInput.value = parseSavedMessage.message;
    objects.email = parseSavedMessage.email;
    objects.message = parseSavedMessage.message;
  }
}
