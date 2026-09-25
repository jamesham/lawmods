// ==UserScript==
// @name         Hamilton County Case Number Search to History
// @namespace    https://github.com/jamesham/lawmods
// @version      2024-11-30.00
// @description  Make search results for case number go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/records-search/case-number-search/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Greasemonkey script running...");

    var form = document.getElementById("cc_frm");
    var newInput = document.createElement("input");
    newInput.type="hidden";
    newInput.name="sec";
    newInput.value="history";
    form.appendChild(newInput);

    console.log("Greasemonkey script finished");

})();
