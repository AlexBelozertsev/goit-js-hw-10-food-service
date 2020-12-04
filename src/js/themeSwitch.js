const themeSwitchTougle = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
body.classList.add(Theme.LIGHT);
saveTheme();

themeSwitchTougle.addEventListener('change', onToggle);

function onToggle(e) {
    body.classList.toggle(Theme.DARK);
    localStorage.setItem('themeDARK', e.target.checked);
};

function saveTheme() {
  const savedToggle = localStorage.getItem('themeDARK');

  if (savedToggle === 'true') {
      body.classList.toggle(Theme.DARK);
      themeSwitchTougle.checked = true;
  }
}
