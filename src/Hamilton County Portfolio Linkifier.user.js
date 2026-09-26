// ==UserScript==
// @name         Hamilton County Portfolio Linkifier
// @namespace    https://github.com/jamesham/lawmods
// @version      2026-09-26.00
// @description  Make Links from the portfolio on courtclerk.org go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/data/portfolio_list.php
// @updateURL    https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Portfolio%20Linkifier.user.js
// @downloadURL  https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Portfolio%20Linkifier.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var attempts = 0;
    var maxAttempts = 21;

    function updateHistoryInputs() {
        if (document.getElementById('case_list_table')) {
            var inputs = document.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type == 'hidden' && inputs[i].name == 'sec') {
                    inputs[i].value = 'history';
                }
            }
        }

        // Results may be added after the table appears. Stop checking after 10 seconds.
        attempts++;
        if (attempts < maxAttempts) {
            setTimeout(updateHistoryInputs, 500);
        }
    }

    updateHistoryInputs();
})();
