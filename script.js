let linkItems = document.querySelectorAll('.nav-list');
let navConternt = document.querySelector('.nav-content');

let totalLinkItemWidth = linkItems[0].clientWidth * linkItems.length;
let totalWrapperWidth = navConternt.clientWidth;
let totaItemlGap = totalWrapperWidth - totalLinkItemWidth;
let gapItems = linkItems.length - 1;
let gap = totaItemlGap / gapItems;

linkItems.forEach((linkItem, index) => {
  linkItem.addEventListener('click', () => {
    let itemWidth = linkItem.clientWidth;

    let indicator = document.querySelector('.indicator');

    indicator.style.left = `${index * itemWidth + index * gap}px`;
  });
});
