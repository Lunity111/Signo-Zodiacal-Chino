function cambiarSigno(){
    let anio = document.getElementById("Anio").value;
    let res = anio % 12;

    switch(res){
        case 0:
            document.getElementById("residuo").innerHTML=("0");
            signo.innerText = "Mono";
            document.getElementById("imgsigno").innerHTML = "<img src='./img/mono.jpeg'>";
            break;
        case 1:
                document.getElementById("residuo").innerHTML=("1");
                document.getElementById("signo").innerHTML=("Gallo");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/gallo.jpeg'>";
            break;
        case 2:
                document.getElementById("residuo").innerHTML=("2");
                document.getElementById("signo").innerHTML=("Perro");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/perro.jpeg'>";
            break;
        case 3:
                document.getElementById("residuo").innerHTML=("3");
                document.getElementById("signo").innerHTML=("Cerdo");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/cerdo.jpeg'>";
            break;
        case 4:
                document.getElementById("residuo").innerHTML=("4");
                document.getElementById("signo").innerHTML=("Rata");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/rata.jpeg'>";
            break;
        case 5:
                document.getElementById("residuo").innerHTML=("5");
                document.getElementById("signo").innerHTML=("Buey");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/buey.jpeg'>";
            break;
        case 6:
                document.getElementById("residuo").innerHTML=("6");
                document.getElementById("signo").innerHTML=("Tigre");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/tigre.jpeg'>";
            break;
        case 7:
                document.getElementById("residuo").innerHTML=("7");
                document.getElementById("signo").innerHTML=("Conejo");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/conejo.jpeg'>";
            break;
        case 8:
                document.getElementById("residuo").innerHTML=("8");
                document.getElementById("signo").innerHTML=("Dragon");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/dragon.jpeg'>";
            break;
        case 9:
                document.getElementById("residuo").innerHTML=("9");
                document.getElementById("signo").innerHTML=("Serpiente");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/serpiente.jpeg'>";
            break;
        case 10:
                document.getElementById("residuo").innerHTML=("10");
                document.getElementById("signo").innerHTML=("Caballo");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/caballo.jpeg'>";
            break;
        case 11:
                document.getElementById("residuo").innerHTML=("11");
                document.getElementById("signo").innerHTML=("Cabra");
                document.getElementById("imgsigno").innerHTML = "<img src='./img/cabra.jpeg'>";
            break;
        
        
    }
}
    
