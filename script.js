function validacaoEmail(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") === -1) && (dominio.search("@") === -1) && (usuario.search(" ") === -1) && (dominio.search(" ") === -1) && (dominio.search(".") !== -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "<p class='alert alert-primary'>Email válido</p>";
    } else {
        document.getElementById("msgemail").innerHTML = "<p class='alert alert-danger'>Email inválido</p>";
    }
}