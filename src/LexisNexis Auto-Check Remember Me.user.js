// ==UserScript==
// @name         LexisNexis Auto-Check Remember Me
// @namespace    https://github.com/jamesham/lawmods
// @version      2026-02-03.00
// @description  Automatically checks the "Remember Me" box on LexisNexis auth pages
// @match        https://authn-us.lexisnexis.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    function checkRememberMe() {
        const checkbox = document.getElementById('rememberMe');

        if (checkbox && checkbox.type === 'checkbox' && !checkbox.checked) {
            checkbox.checked = true;

            // Trigger events in case the site listens for them
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            checkbox.dispatchEvent(new Event('input', { bubbles: true }));

            console.log('[TM] rememberMe checkbox checked.');
        }
    }

    // Run once after load
    checkRememberMe();

    // Also observe in case the login form is injected dynamically
    const observer = new MutationObserver(() => {
        checkRememberMe();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
