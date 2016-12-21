'use strict';

(() => {
  function storeSettings() {
    console.log();
    var value =
    chrome.storage.local.set({apitoken:  document.querySelector('.apitoken').value }, () => {
      document.querySelector('.apitoken').value
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', storeSettings);
    chrome.storage.local.get('apitoken', (value) => {
      document.querySelector('.apitoken').value = value.apitoken || "";
    });
  });

})();
