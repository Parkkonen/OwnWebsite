let discoTimeout;

export function startDisco() {
  document.documentElement.style.setProperty('--disco-animation-duration', '3s');
  
  document.body.classList.add('disco-active');

  clearTimeout(discoTimeout);
  discoTimeout = setTimeout(function() {
    document.body.classList.remove('disco-active');
  }, 3000);
}
