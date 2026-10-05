document.addEventListener('DOMContentLoaded', () => {
  // Menu: dropdown panel on narrow screens.
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  if (button && menu) {
    const setMenu = (open) => {
      button.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    };

    button.addEventListener('click', () => {
      setMenu(button.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  // FAQ: one answer open at a time; clicking the open one closes it.
  const items = Array.from(document.querySelectorAll('.faq__item'));

  const setOpen = (item, open) => {
    const button = item.querySelector('.faq__q');
    const answer = item.querySelector('.faq__a');
    const icon = item.querySelector('.faq__toggle use');
    item.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    answer.hidden = !open;
    icon.setAttribute('href', open ? '#i-minus' : '#i-plus');
  };

  items.forEach((item) => {
    item.querySelector('.faq__q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      items.forEach((other) => setOpen(other, false));
      if (!wasOpen) setOpen(item, true);
    });
  });

  const year = document.querySelector('.js-year');
  if (year) year.textContent = new Date().getFullYear();
});
