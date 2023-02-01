const initTab = () => {

  const tabLinks = document.querySelectorAll('.products__item-time');
  const tabContent = document.querySelectorAll('[data-money]');


  tabLinks.forEach((el) => {
    el.addEventListener('click', openTabs);
    el.addEventListener('keydown', openTabs);
  });


  function openTabs(el) {
    if (el.code === 'Enter' || el.code === 'Space' || el.button === 0) {
      const btnTarget = el.currentTarget;
      const long = btnTarget.dataset.long;

      tabLinks.forEach((e) => {
        e.classList.remove('products__item-time--active');
      });

      tabContent.forEach((e) => {
        e.classList.remove('products__list-price--active');
      });

      const tabContentActive = document.querySelectorAll(`[data-money='${long}']`);

      tabContentActive.forEach((e) => {
        e.classList.add('products__list-price--active');
      });

      btnTarget.classList.add('products__item-time--active');
    }
  }
};

export {initTab};
