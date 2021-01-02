function usuario(user,pass){
    switch(true){
        case (user === 'admin' && pass === 1234) : console.log('Bienvenido a nuestro sitio'); break;
        case (user === 'admin' && pass !== 1234) : console.log('Contraseña incorrecta');break;
        case (user !== 'admin' && pass === 1234) : console.log('Usuario incorrecto');break;
        case (user !== 'admin' && pass !== 1234) : console.log('Usuario y contraseña incorrectos');break; 
        default : console.log('Debe ingresar los datos requeridos');break
    }
}
usuario('ad',1234);