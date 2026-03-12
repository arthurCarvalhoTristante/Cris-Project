

const ValidEmailSenha = (email, senha) => {

    if (email != "teste@gmail.com" || senha != "12345") {
        return false;
    } else {
        return true;
    }
}

export default ValidEmailSenha;