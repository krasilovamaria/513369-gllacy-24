var mapBtn = document.querySelector('.callback-link');
var feedback = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');
var closeFeedback = document.querySelector('.modal-close');
var inputName = document.querySelector('.callback-name');
var inputEmail = document.querySelector('.callback-email');
var feedbackSubmit = document.querySelector('.feedback-button');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
};

feedbackSubmit.addEventListener('click', function(evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
    feedback.classList.remove('feedback-shake');
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add('feedback-shake');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', inputName.value);
    }
  }
});

mapBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.add('feedback-showed');
  overlay.style.display = 'block';
  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

closeFeedback.addEventListener('click', function() {
  feedback.classList.remove('feedback-showed');
  overlay.style.display = 'none';
  feedback.classList.remove('feedback-shake');
});

overlay.addEventListener('click', function() {
  this.style.display = 'none';
  feedback.classList.remove('feedback-showed');
  feedback.classList.remove('feedback-shake');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    feedback.classList.remove('feedback-shake');
    if (feedback.classList.contains('feedback-showed')) {
      feedback.classList.remove('feedback-showed');
      overlay.style.display = 'none';
    }
  }
});
