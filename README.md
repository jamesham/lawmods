# lawmods
Mods, plugins, userscripts, and extensions for the web browser targeted at legal industry websites

## Install userscripts

Install [Tampermonkey](https://www.tampermonkey.net/) in your browser, then open the links below one at a time and confirm **Install** in Tampermonkey. Choose only the scripts you need. Reload an already open target site after installation.

| Script | What it does | Install |
| --- | --- | --- |
| Hamilton County Case Number Search to History | Opens case number search results at the case history. | [Install](https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Case%20Number%20Search%20to%20History.user.js) |
| Hamilton County Classification Search Results Linkifier | Opens classification and attorney case list results at the case history. | [Install](https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Classification%20Search%20Results%20Linkifier.user.js) |
| Hamilton County Portfolio Linkifier | Opens portfolio cases at the case history. | [Install](https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Portfolio%20Linkifier.user.js) |
| Hamilton County Search Results Linkifier | Opens case name search results at the case history. | [Install](https://raw.githubusercontent.com/jamesham/lawmods/main/src/Hamilton%20County%20Search%20Results%20Linkifier.user.js) |
| LexisNexis Auto-Check Remember Me | Checks Remember Me on LexisNexis sign-in pages. | [Install](https://raw.githubusercontent.com/jamesham/lawmods/main/src/LexisNexis%20Auto-Check%20Remember%20Me.user.js) |

Each script uses its install link as its update and download URL. When publishing a script change, increase its `@version` and push it to `main`. To install updates without prompting, enable **Automatic installation** in Tampermonkey's update settings. If a link displays source code instead of an install prompt, use Tampermonkey's **Utilities → Import from URL** with that link.
