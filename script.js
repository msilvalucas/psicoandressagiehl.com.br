(() => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const header = document.querySelector('[data-header]');
  const year = document.querySelector('[data-year]');

  if (year) year.textContent = new Date().getFullYear();

  if (button && menu) {
    const closeMenu = () => {
      button.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    };

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      menu.classList.toggle('is-open', !isOpen);
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (header) {
    const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }
})();
