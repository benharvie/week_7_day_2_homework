const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelectView = function(element){
  this.element = element;
};

InstrumentSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:ready', (event) => {
    const instruments = event.detail;
    this.populate(instruments);
  })
};

InstrumentSelectView.prototype.populate = function (data) {
  data.forEach((instrument, index) => {
    const selectOption = document.createElement('option');
    selectOption.textContent = instrument.name;
    selectOption.value = index;
    console.log(selectOption);
    this.element.appendChild(selectOption);
  })
};

module.exports = InstrumentSelectView;
