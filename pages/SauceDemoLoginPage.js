export class SauceDemoLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.productsTitle = page.locator('[data-test="title4"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigateTo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username) {
    await this.usernameField.click();
    await this.usernameField.fill(username);
  }

  async fillPassword(password) {
    await this.passwordField.click();
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async verifyProductsPageVisible() {
    await this.productsTitle.waitFor({ state: 'visible' });
    return await this.productsTitle.isVisible();
  }

  async verifyErrorMessageVisible() {
    await this.errorMessage.waitFor({ state: 'visible' });
    return await this.errorMessage.isVisible();
  }

  async getErrorMessageText() {
    return await this.errorMessage.textContent();
  }
}
