const PubSub = require('../helpers/pub_sub.js');
const instruments = require('./instruments.js');

const Instruments = function(){
  this.instruments = instruments;
}

Instruments.prototype.bindEvents = function () {
  PubSub.publish('Instruments:ready', this.instruments);

  PubSub.subscribe('InstrumentSelectView:change', (event) => {
    const indexVal = event.detail
    console.log(indexVal);
  })
};

module.exports = Instruments;
