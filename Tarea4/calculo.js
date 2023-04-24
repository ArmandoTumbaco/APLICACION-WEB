function MostrarResultado(){
    var num1 = parseInt (document.getElementById("num1").value);
    var num2 = parseInt (document.getElementById("num2").value);
    var resultado;


    for (var i= 0; i< 5; i++ ){
    switch (i){
        case 0:
            resultado=num1+num2;
            document.getElementById("resultado").innerHTML+="resultado de suma: "+ resultado+"<br>";
            break;
            case 1:
            resultado=num1-num2;
            document.getElementById("resultado").innerHTML+="resultado de resta: "+ resultado+"<br>";
            break;
            case 2:
            resultado=num1*num2;
            document.getElementById("resultado").innerHTML+="resultado de multiplicacion: "+ resultado+"<br>";
            break;
            case 3:
            resultado=num1/num2;
            document.getElementById("resultado").innerHTML+="resultado de division: "+ resultado+"<br>";
            break;
            case 4:
            resultado=num1%num2;
            document.getElementById("resultado").innerHTML+="resultado de modulo: "+ resultado+"<br>";
            break;
            default:
            break;
        }
    }
}