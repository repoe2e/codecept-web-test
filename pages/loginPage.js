const { I } = inject();

module.exports = {
  //elementos 
  fields: {
    email: 'input[name="email"]',
    senha: 'input[name="password"]'
  },

  button: {
    signIn: '#submit-login'
  },

  message: {
    logInAccount: 'Log in to your account',
    authenticationFailed: 'Authentication failed.'
   
  },

  //metodos ou funções
  preencherFormLogin(email, senha) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.senha, senha)
  },

  preencherEmail(email) {
    I.fillField(this.fields.email, email)
  },

  submitLogin() {
    I.click(this.button.signIn)
  },

  validarMsg(msg) {
    I.see(msg)
  },

  validarCredenciaisInvalidas(){
    I.see(this.message.authenticationFailed)
  }

  





}
