/*
    `La letra "e" es convertida para "enter"`
    `La letra "i" es convertida para "imes"`
    `La letra "a" es convertida para "ai"`
    `La letra "o" es convertida para "ober"`
    `La letra "u" es convertida para "ufat"`
 */
let resultado = "Todavia no codificas/decodificas nada";
let reg = /^[a-z\s]*$/;
function codificar(){
    let codigo = [];
    let valor = $("#texto").val();
    if(!reg.test(valor)){
        alert("No se permiten mayusculas o acentos");
        return true;
    }else if(valor === ''){
        alert("Tienes que ingresar algun mensaje");
        return true;
    }else{
        const texto = valor.split("");
        for (let letra of texto) {
            if( letra === "a"){
                letra = "ai";
            }else if( letra === "e"){
                letra = "enter";
            }else if( letra === "i"){
                letra = "imes";
            }else if( letra === "o"){
                letra = "ober";
            }
            else if( letra === "u"){
                letra = "ufat";
            }
            codigo.push(letra);
        }
        codigo = codigo.join('');
        $("#resultado").text(codigo);
        resultado = codigo;
    }
}
function decodificar(){
    let codigo = [];
    let valor = $("#texto").val();
    if(!reg.test(valor)){
        alert("No se permiten mayusculas o acentos");
        return true;
    }else if(valor === ''){
        alert("Tienes que ingresar algun mensaje");
        return true;
    }else{
        let texto = valor.split("");
        for (let [i, letra] of texto.entries()) {
            if( letra === "a"){
                texto.splice(i,1);
            }else if( letra === "e"){
                texto.splice(i,4);
            }else if( letra === "i"){
                texto.splice(i,3);
            }else if( letra === "o"){
                texto.splice(i,3);
            }
            else if( letra === "u"){
                texto.splice(i,3);
            }
            codigo.push(letra);
        }
        codigo = codigo.join('');
        $("#resultado").text(codigo);
        resultado = codigo;
    }
}
function copiar(){
    navigator.clipboard.writeText(resultado);
}