const helloButton = document.getElementById('hello-button');
const message = document.getElementById('message');

helloButton.addEventListener('click', () => {
  message.textContent = 'hello';
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch((error) => console.error('Service worker registration failed:', error));
  });
}
