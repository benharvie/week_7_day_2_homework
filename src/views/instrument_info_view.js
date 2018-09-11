const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:family-selected', (event) => {
    const instrumentFamily = event.detail;
    this.showDetails(instrumentFamily);
  })
};

InstrumentInfoView.prototype.showDetails = function (instrumentFamily) {
  const infoContainer = document.createElement('p');
  infoContainer.textContent = instrumentFamily;
  this.container.appendChild(infoContainer);
};

module.exports = InstrumentInfoView;
