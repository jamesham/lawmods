// ==UserScript==
// @name         Hamilton County Portfolio Linkifier
// @namespace    https://github.com/jamesham/lawmods
// @version      2026-09-25.00
// @description  Make Links from the portfolio on courtclerk.org go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/data/portfolio_list.php
// @updateURL    https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Portfolio%20Linkifier.user.js
// @downloadURL  https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Portfolio%20Linkifier.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function waitForTableAndCallUpdate() {
    var tableStyle = document.getElementById("case_list_table").style;
    var styleLen = tableStyle.length;

    if (styleLen == 0) {
        setTimeout(waitForTableAndCallUpdate,1000);
        return;
    }

    var inputs = document.getElementsByTagName('input');
    var inputsLen = inputs.length;

    var i = 0;
    while (i < inputsLen) {
        var input = inputs[i];
        if (input.type == "hidden" && input.name == "sec") {
            input.value = "history";
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
