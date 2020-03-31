class Login {
  get url() { return "?controller=authentication" }
  get emailInput() { return $("#email") }
  get passwordlInput() { return $("#passwd") }
  get signInButton() { return $("#SubmitLogin") }

  /**
   * Signs in
   * 
   * @param {*} email - Email
   * @param {*} password - Password
   */
  signIn(email, password) {
    this.emailInput.waitForDisplayed(5000);
    this.emailInput.setValue(email);
    this.passwordlInput.setValue(password);
    this.signInButton.click();
  }
}
module.exports = new Login();