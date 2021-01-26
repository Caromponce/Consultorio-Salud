class User {
    constructor(userParam, passwordParam) {
        this.user = userParam;
        this.password = passwordParam;
    }

    verifyCredentials() {
        if ((this.user == 'admin') && (this.password == 1234)) {
            alert('Bienvenido Admin!');
        } else if ((this.user == 'paciente') && (this.password == 1111)) {
            alert('Bienvenido Paciente Fulano');
        } else {
            alert('Usuario y/o contraseña incorrectos');
        }
    }

}

var nickVisitor = prompt('Ingrese nombre de usuario: ');
nickVisitor = nickVisitor.toLowerCase();
var passwordVisitor = Number(prompt('Ingrese su contraseña: '));

let userVisitor = new User(nickVisitor, passwordVisitor);

userVisitor.verifyCredentials();