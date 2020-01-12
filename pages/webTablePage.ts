import { element, ElementFinder, by, browser, ElementArrayFinder } from "protractor";

export class WebTableObject {
    public addUserButton: ElementFinder;
    public firstName: ElementFinder;
    public lastName: ElementFinder;
    public userName: ElementFinder;
    public password: ElementFinder;
    public optionRadios: ElementArrayFinder;
    public email: ElementFinder;
    public mobilePhone: ElementFinder;
    public btnSuccess: ElementFinder;
    public tableRows: ElementArrayFinder;
    public searchBox: ElementFinder;
    public dialogButtons: ElementArrayFinder;

    constructor() {
        this.addUserButton = element(by.xpath('//button[contains(text(),"Add User")]'));
        this.firstName = element(by.name('FirstName'));
        this.lastName = element(by.name('LastName'));
        this.userName = element(by.name('UserName'));
        this.password = element(by.name('Password'));
        this.optionRadios = element.all(by.name('optionsRadios'));
        this.email = element(by.name('Email'));
        this.mobilePhone = element(by.name('Mobilephone'));
        this.btnSuccess = element(by.css(".btn-success"));
        this.tableRows = element.all(by.repeater('dataRow in displayedCollection'));
        this.searchBox = element(by.model('searchValue'));
        this.dialogButtons = element.all(by.repeater('btn in buttons'));
    }
public getRowColumns(tableRow: ElementFinder): ElementArrayFinder {
    let rowColumn: ElementArrayFinder;
    rowColumn = tableRow.all(by.repeater('column in columns'));
    return rowColumn;
}

public async enterToNewUserOption() {
    await this.addUserButton.click();
}

public async fillNewUserForm(rowData: { [colName: string]: string }) {

    await this.firstName.sendKeys(rowData['FirstName']);
    await this.lastName.sendKeys(rowData['LastName']);
    await this.userName.sendKeys(rowData['UserName']);
    await this.password.sendKeys(rowData['Password']);
    await this.optionRadios.first().click();
    await this.email.sendKeys(rowData['Email']);
    let myselect = element(by.name("RoleId"));
    await myselect.click();
    await browser.sleep(3000);
    myselect = element(by.name("RoleId"));
    await myselect.$('[value="0"]').click();
    await this.mobilePhone.sendKeys(rowData['CellPhone']);
    await browser.sleep(3000);
    await this.btnSuccess.click();
}
}
