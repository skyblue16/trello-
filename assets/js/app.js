window.onload = function() {
   
    var sendButton = document.getElementsByName("enviar")[0];
    var thinkInput = document.getElementsByName("texto")[0];
    var timeLine = document.getElementsByName("tarjeta")[0];
    var container = document.getElementById("imagen");
 

    sendButton.onclick = function() {

        if (thinkInput.value == "") {
            alert("tienes que escribir algo");
        } else {
            var tarjetaDiv = document.createElement("div");
            var tuitP = document.createElement("p");
            tarjetaDiv.appendChild(tuitP);
            tarjetaDiv.className = "tarjetastrello"
            
    
            tuitP.textContent = thinkInput.value;
            
             container.insertBefore(tarjetaDiv, container.children[0]);
            }
           
    }  
    var contenedor = document.getElementById("trello");
    var buton = document.getElementsByName("boton")[0];
    buton.onclick = function(){
        var texta= document.createElement("textarea");
        contenedor.appendChild(texta);
        texta.className = "tarjetas"
        contenedor.insertBefore(texta, contenedor.children[0]);
        
    }           
    var fucion = function(){
         sendButton.appendChild(buton);
    } 
}
    
