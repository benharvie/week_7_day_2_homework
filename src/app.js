const Instruments = require('./models/instruments.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');
const InstrumentSelectView = require('./views/instrument_select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const instrumentSelect = document.querySelector('#instrument-families');
  const instrumentSelectView = new InstrumentSelectView(instrumentSelect);
  InstrumentSelectView.bindEvents();

  const instrumentInfo = document.querySelector('#instrument-info');
  const instrumentInfoView = new InstrumentInfoView(instrumentInfo);
  InstrumentInfoView.bindEvents();

  const instruments = new Instruments();
  instruments.bindEvents();
});
