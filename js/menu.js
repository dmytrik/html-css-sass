// (() => {
//   const menuBtn = document.querySelector('[data-menu-button]');
//   const menu = document.querySelector('[data-menu]');
//   menuBtn.addEventListener('click', () => {
//     const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
//     menuBtn.classList.toggle('is-open');
//     menuBtn.setAttribute('aria-expanded', !expanded);
//     menu.classList.toggle('is-open');
//   });
// })();
(() => {
  const menu = {
    open: document.querySelector('[data-menu-open]'),
    close: document.querySelector('[data-menu-close]'),
    box: document.querySelector('[data-menu]'),
  };

  menu.open.addEventListener('click', toggleModal);
  menu.close.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    menu.box.classList.toggle('is-open');
  }
})();
