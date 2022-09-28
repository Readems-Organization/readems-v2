// import React from 'react';
// import ReactDOM from 'react-dom';

// export const Translate = ReactDOM.render(function loadGoogleTranslate() {
//   new google.translate.TranslateElement('google_element');
// }, document.getElementById('google_element'));

// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "./backend/server.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "/"
//     }
//   ]
// }

import React, { useEffect } from 'react';
import axios from 'axios';

const Translate = () => {
  useEffect(() => {
    async function googleTranslateElementInit() {
      const google = await axios.get(
        'http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
      );
      new google.translate.TranslateElement(
        {
          defaultLanguage: 'en',
          pageLanguage: 'en',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element',
      );
    }

    googleTranslateElementInit();
  });
  return <div id='google_translate_element'></div>;
};

export default Translate;
