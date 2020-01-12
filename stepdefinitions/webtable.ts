import { browser, element, by, ExpectedConditions } from "protractor";
import { WebTableObject } from "../pages/webTablePage";
import { TableDefinition } from "cucumber";
const { When, Then, Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let webTablePage = new WebTableObject();
let data;

Given('I am in the webtablePage using chrome', async () => {
    const pageTitle = await browser.getTitle();
    await expect(pageTitle).to.be.equal('Protractor practice website - WebTables');
});

When('I enter to add user option', async function() {
    await webTablePage.enterToNewUserOption();
});

When('I fill the user info', async function(dataTable: TableDefinition) {
  data = dataTable.hashes();
  webTablePage = new WebTableObject();
  const rowData = data[0];
  await webTablePage.fillNewUserForm(rowData); 
});

Then('the new user should should appear in the table', async () => {
  await browser.wait(ExpectedConditions.visibilityOf(webTablePage.tableRows.first()));
  await browser.sleep(3000);
  const newUser = webTablePage.tableRows.first();
  const usrName = webTablePage.getRowColumns(newUser).first();
  expect(await usrName.getText()).to.be.equal(data[0]['FirstName']);
});

When('I search the {string} user', async function(user: string) {
  await webTablePage.searchBox.sendKeys(user);
});

When('I delete the {string} user', async function(user: string) {
  const result = webTablePage.tableRows.filter(async (row) => (await row.getText()).includes(user));
  expect(await result.count()).to.be.at.least(1);
  const userRow = result.first();
  await userRow.element(by.className('icon-remove')).click();
  const okButton = webTablePage.dialogButtons.filter(async (el)  => await el.getText() === 'OK').first();
  await okButton.click();
});

Then('the {string} user should be removed from the list', async function(user: string) {
  webTablePage = new WebTableObject();
  const resultRows = webTablePage.tableRows.filter(async (row) => (await row.getText()).includes(user));
  expect(await resultRows.count()).to.be.equal(0);
});
