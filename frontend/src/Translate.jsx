import React from 'react';
import ReactDOM from 'react-dom';

export const Translate = ReactDOM.render(function loadGoogleTranslate() {
  new google.translate.TranslateElement('google_element');
}, document.getElementById('google_element'));
