Tests based on the plyawright framework.
Include the playwright CLI.

Test for frontend has name without 'request' word in the name.
Test for checking request for API has name with 'request' name.

For launch the existing tests on the local machine:
1. pull the repo
2. open the directory
3. Run the command
```
npm install
```
4. run the test
```
node request.js
```


For launch the CLI tool for recording
1. launch the command
```
npx playwright-cli codegen <start page>
```
2. Copy the generated code in the console interface
3. Paste in the js.file and launch the tests