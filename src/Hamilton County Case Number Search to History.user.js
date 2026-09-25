// ==UserScript==
// @name         Hamilton County Case Number Search to History
// @namespace    https://github.com/jamesham/lawmods
// @version      2026-09-25.00
// @description  Make search results for case number go directly to the document list
// @author       James Hamilton
// @match        https://www.courtclerk.org/records-search/case-number-search/
// @updateURL    https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Case%20Number%20Search%20to%20History.user.js
// @downloadURL  https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Case%20Number%20Search%20to%20History.user.js
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
