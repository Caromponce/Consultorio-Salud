var user = prompt('Ingrese nombre de usuario: ');
user = user.toLowerCase();
var password = Number(prompt('Ingrese su contraseña: '));

function Login() {
    if ((user == 'admin') && (password == 1234)) {
        alert('Bienvenido Admin!');
    } else if ((user == 'paciente') && (password == 1111)) {
        alert('Bienvenido Paciente Fulano');
    } else {
        alert('Usuario y/o contraseña incorrectos');
    }

}
Login();