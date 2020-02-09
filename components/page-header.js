class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var badge = this.headerElement.querySelector('.badge')
    if (isNaN(newAverage)) {
      badge.textContent = 0;
    } else {
      badge.textContent = newAverage
    }
  }
}
