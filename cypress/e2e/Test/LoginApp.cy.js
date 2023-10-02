/// < reference type="cypress" />

import { Login } from "../Pages/LoginPage";

const login_Page = new Login();

describe('Login App', () => {
    it('Valid Login Testcase', () => {

      login_Page.navigate()
      login_Page.clickSigninbutton()
      login_Page.enterUsername("Admin")
      login_Page.enterPassword("admin123")
      login_Page.clickLoginbutton()
      login_Page.verifyLogin()
    })

    // it('Invalid Login Testcase', () => {

    //   login_Page.navigate()
    //   login_Page.enterUsername("Admin1")
    //   login_Page.enterPassword("admin12345")
    //   login_Page.clickLoginbutton()
    //   login_Page.checkErrorMessage()
    //   login_Page.verifyLogin()
    //   })
})