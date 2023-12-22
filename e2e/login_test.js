const { I, loginPage } = inject();

Feature('login');

Scenario('deve realizar login com sucesso', () => {
    I.amOnPage('/login?back=my-account')
    loginPage.preencherFormLogin('e2etreinamentos@email.com', 'Teste@123')
    loginPage.submitLogin()
    loginPage.validarMsg('Aluno Treinamentos')
}).tag('positivo');

Scenario('nao deve realizar login com email invalido', () => {
    I.amOnPage('/login?back=my-account')
    loginPage.preencherFormLogin('treinamentos@email.com', 'Teste@123')
    loginPage.submitLogin()
    loginPage.validarCredenciaisInvalidas()
   
}).tag('negativo');

Scenario('nao deve realizar login com senha invalida', () => {
    I.amOnPage('/login?back=my-account')
    loginPage.preencherFormLogin('e2etreinamentos@email.com', 'Teste')
    loginPage.submitLogin()
    loginPage.validarCredenciaisInvalidas()
   
}).tag('negativo');

