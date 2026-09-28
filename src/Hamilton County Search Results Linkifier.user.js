// ==UserScript==
// @name         Hamilton County Search Results Linkifier
// @namespace    https://github.com/jamesham/lawmods
// @version      2026-09-27.00
// @description  Make Links from the portfolio on courtclerk.org go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/data/cns_results.php*
// @updateURL    https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Search%20Results%20Linkifier.user.js
// @downloadURL  https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Search%20Results%20Linkifier.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function updateCaseForms() {
    var inputs = document.getElementsByTagName('input');
    var inputsLen = inputs.length;

    var i = 0;
    while (i < inputsLen) {
        var input = inputs[i];
        if (input.type == "hidden" && input.name == "casenumber" && input.form) {
            var secInput = input.form.querySelector('input[name="sec"]');
            if (!secInput) {
                secInput = document.createElement('input');
                secInput.type = 'hidden';
                secInput.name = 'sec';
                input.form.appendChild(secInput);
            }
            secInput.value = 'history';
        }
        i++;
    }
}

(function() {
    'use strict';

    console.log("Greasemonkey script running...");

    updateCaseForms();

    console.log("Greasemonkey script finished");

})();
