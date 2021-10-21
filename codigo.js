function calcular(){
    
    var valorelegido=document.getElementById('categoriasLista').value;
    var cant=document.getElementById("cantidad").value;
    var total;
   
    switch(valorelegido){
        case "Estudiante":
            total=250*0.8*cant;
            document.getElementById('totalPagar').innerHTML= "Total a Pagar: $" + total;
        break
        case "Trainee":
            total=250*0.8*cant;
            document.getElementById('totalPagar').innerHTML="Total a Pagar: $" + total;
        break;
        case "Junior":
            total=250*0.8*cant;
        
            document.getElementById('totalPagar').innerHTML="Total a Pagar: $" + total;
        break;
    }
}



