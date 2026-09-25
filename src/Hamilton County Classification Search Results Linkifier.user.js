// ==UserScript==
// @name         Hamilton County Classification Search Results Linkifier
// @namespace    https://github.com/jamesham/lawmods
// @version      2026-09-25.00
// @description  Make Links from the portfolio on courtclerk.org go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/data/cpciv_classification_results.php*
// @match        https://www.courtclerk.org/data/attorney_case_list.php*
// @updateURL    https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Classification%20Search%20Results%20Linkifier.user.js
// @downloadURL  https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Classification%20Search%20Results%20Linkifier.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function waitForTableAndCallUpdate() {

    var inputs = document.getElementsByTagName('input');
    var inputsLen = inputs.length;

    var i = 0;
    while (i < inputsLen) {
        var input = inputs[i];
        if (input.type == "hidden" && input.name == "sec" && input.value == "doc") {
            input.value="history";
        }
        i++;
    }
}

(function() {
    'use strict';

    console.log("Greasemonkey script running...");

    waitForTableAndCallUpdate();

    console.log("Greasemonkey script finished");

})();
