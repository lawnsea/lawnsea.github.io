(function () {
  function css(el, prop) {
    return window.getComputedStyle ?
      getComputedStyle(el).getPropertyValue(prop) :
      el.currentStyle[prop];
  }

  function getFittedSize(el) {
    return Math.floor(
        0.95 *
        parseFloat(css(el, 'font-size')) *
        el.parentElement.clientWidth / el.clientWidth
      );
  }

  var nameEl = document.querySelector('.title-text .name span');
  var titleEl = document.querySelector('.title-text .title span');
  var linksEl = document.querySelector('.contact ul');
  var acksEl = document.querySelector('.acknowledgements span');
  function fitAllEls() {
    var nameSize = getFittedSize(nameEl);
    nameEl.style.fontSize = nameSize + 'px';
    nameEl.style.lineHeight = nameSize + 'px';

    var titleSize = getFittedSize(titleEl);
    titleEl.style.fontSize = titleSize + 'px';
    titleEl.style.lineHeight = titleSize + 'px';

    var acksSize = getFittedSize(acksEl);
    acksEl.style.fontSize = acksSize + 'px';
    acksEl.parentElement.style.lineHeight = (1.2 * acksSize) + 'px';

    var linksSize = 0.75 * getFittedSize(linksEl);
    linksEl.style.fontSize = linksSize + 'px';
    linksEl.style.lineHeight = (1.2 * linksSize) + 'px';
  }
  
  if (!document.querySelectorAll || !window.addEventListener) {
    return;
  }
  
  fitAllEls();
  
  window.addEventListener('resize', fitAllEls);
  window.addEventListener('deviceorientation', fitAllEls);
}());
