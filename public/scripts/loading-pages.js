const url = window.location.href;
const email = 'matheusferreira.dev@gmail.com';
const linkedinAddress =
  'https://www.linkedin.com/in/matheus-ferreira-9267091b3/';
const githubAddress = 'https://github.com/MattFerreira18';
const telegramAddress = 'https://t.me/MattFerreira18';
const timer = 2300;

const urlNames = url.split('/');

function redirectLinkedin() {
  setTimeout(() => {
    window.location.href = linkedinAddress;
  }, timer);
}

function redirectGithub() {
  setTimeout(() => {
    window.location.href = githubAddress;
  }, timer);
}

function redirectTelegram() {
  setTimeout(() => {
    window.location.href = telegramAddress;
  }, timer);
}

function redirectEmail() {
  setTimeout(() => {
    const emailto = `mailto:${email}`;
    window.location.href = emailto;
  }, timer);
}

(function controller() {
  for (let i = 0; i < urlNames.length; i++) {
    if (urlNames[i] === '') {
      urlNames.splice([i], 1);
    } else if (urlNames[i].includes('linkedin')) {
      redirectLinkedin();
    } else if (urlNames[i].includes('github')) {
      redirectGithub();
    } else if (urlNames[i].includes('telegram')) {
      redirectTelegram();
    } else if (urlNames[i].includes('email')) {
      redirectEmail();
    }
  }
})();
