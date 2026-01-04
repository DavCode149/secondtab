(function () {
  const panicKey = JSON.parse(localStorage.getItem('panicKey'));
  if (!panicKey) return;

  document.addEventListener('keydown', e => {
    if (e.key === panicKey) {
      triggerPanic();
    }
  });

  function triggerPanic() {
  // Prevent duplicate overlays
  if (document.getElementById('panic-overlay')) return;

  // Overlay
  const overlay = document.createElement('div');
  overlay.id = 'panic-overlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: #000;
    z-index: 999999;
    display: flex;
    flex-direction: column;
  `;

  // Close button
  const close = document.createElement('div');
  close.innerHTML = '✕';
  close.style.cssText = `
    position: absolute;
    top: 14px;
    right: 18px;
    font-size: 24px;
    color: black;
    cursor: pointer;
    z-index: 1000000;
    user-select: none;
  `;
  close.onclick = () => overlay.remove();

  // Iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://en.wikipedia.org/wiki/Special:Random';
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    flex: 1;
  `;

  overlay.appendChild(close);
  overlay.appendChild(iframe);
  document.body.appendChild(overlay);
}
})();
