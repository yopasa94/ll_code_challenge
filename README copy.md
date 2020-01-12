### Protractor-Cucumber-TypeScript Setup Guide   

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor installed--> Visual Studio Code

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
#### Run Scripts

* Download **chrome & gecko driver** binaries locally

```
npm run webdriver-update
``` 

* Start your selenium server
```
npm run webdriver-start
```

* Run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

#### HTML Reports
This project has been integrated with [cucumber-html-reporter], which is generated in the `reports` folder after running `npm test`.

