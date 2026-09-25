// ==UserScript==
// @name         Hamilton County Search Results Linkifier
// @namespace    https://github.com/jamesham/lawmods
// @version      2024-11-18.00
// @description  Make Links from the portfolio on courtclerk.org go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/data/cns_results.php*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function waitForTableAndCallUpdate() {
    var tableStyle = document.getElementById("cns_results_table").style;
    var styleLen = tableStyle.length;

    var inputs = document.getElementsByTagName('input');
    var inputsLen = inputs.length;

    var i = 0;
    while (i < inputsLen) {
        var input = inputs[i];
        if (input.type == "hidden" && input.name == "casenumber") {
            console.log(input);
            var newInput = document.createElement("input");
            newInput.type="hidden";
            newInput.name="sec";
            newInput.value="history";
            input.parentNode.appendChild(newInput);
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
