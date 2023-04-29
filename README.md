# NewClassroomJavascript

Instructions
1. Install NPM and Nodejs https://nodejs.org/en/download
2. Restart VS Code
3. In VS Code terminal run "cypress install". If this does not work for you, you can find the direct download here https://docs.cypress.io/guides/getting-started/installing-cypress and follow their install guide. Manually installing cypress will get cypress running but then you will have to tell it the main directory of this repo.
4. Run "npx cypress open" in your VS Code terminal (skip this if you manually installed Cypress)
5. Select "E2E Testing"
6. Choose Electron (You can use the others but this is my favorite and where I tested the code)
7. Click "Start E2E Testing In Electron"
8. You will now see a folder like structure in the middle of the screen, click "census.cy.js", it is highlighted in blue.
9. Once the test has finished running, you can expand the √'s and X's to see what passed and what failed. You can also inspect the black page on the right and open the console to see additional information. Selecting requests with the console open will elaborate on the request that was made and the response body.
10. All of my code is stored in "cypress\e2e\0-NewClassroom\census.cy.js" and there are json files stored in "cypress\fixtures"

What works:
1. Count by Gender works and reports accurately
2. Count by Country works and reports accurately
3. CountPasswordComplexity does give a response but they are inaccurate, I have expanded on this in the defects mentioned below.

Defects:
1: Action type CountPasswordComplexity appears to be returning the password as "name".
Severity: Low

2. Action type CountPasswordComplexity is considering numberic characters towards complexity even though instructions state
Complexity will be considered the number of non-alphanumeric characters in the password.
Non-alphanumeric characters should only include ! @ # & ( ) – [ { } ] : ; ', ? / * ` ~ $ ^ + = < > “
Severity: High

3. When "–" is inserted in a password, it converts to "\u2013" in results. I ran across this when I copied non-alphanumeric characters
from a website and it should be noted that "-" is not the same as "–". My keyboards version of "-" does not suffer from this issue.
Severity: Very low