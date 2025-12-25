(function () {
  function applyCloak() {
    const enabled = JSON.parse(localStorage.getItem('cloakEnabled'));
    if (!enabled) return;

    const title = JSON.parse(localStorage.getItem('cloakTitle'));
    const icon = JSON.parse(localStorage.getItem('cloakIcon'));

    if (title) {
      document.title = title;
    }

    if (icon) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = icon;
    }
  }

  // Run once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyCloak);
  } else {
    applyCloak();
  }

  // Run AGAIN after full load (important)
  window.addEventListener('load', applyCloak);
})();
