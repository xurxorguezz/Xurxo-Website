window.onload = function() {

visor=document.getElementById("reloj"); //localizar pantalla del reloj
//asociar eventos a botones: al pulsar el botón se activa su función.
document.cron.boton1.onclick = activo; 
document.cron.boton2.onclick = pausa;
document.cron.boton1.disabled=false;
document.cron.boton2.disabled=true;
//variables de inicio:
var marcha=0; //control del temporizador
var cro=0; //estado inicial del cronómetro.

}

//botón Empezar / Reiniciar
function activo (){   
     if (document.cron.boton1.value=="Empezar") { //botón en "Empezar"
        empezar() //ir  la función empezar
        }
     else {  //Botón en "Reiniciar"
        reiniciar()  //ir a la función reiniciar
        }
     }
//botón pausa / continuar
function pausa (){ 
     if (marcha==0) { //con el boton en "continuar"
        continuar() //ir a la función continuar
        }
     else {  //con el botón en "parar"
        parar() //ir a la funcion parar
        }
     }
//Botón 1: Estado empezar: Poner en marcha el crono
function empezar() {
      emp=new Date() //fecha inicial (en el momento de pulsar)
      elcrono=setInterval(tiempo,10); //función del temporizador.
      marcha=1 //indicamos que se ha puesto en marcha.
      document.cron.boton1.value="Reiniciar"; //Cambiar estado del botón
      document.cron.boton2.disabled=false; //activar botón de pausa
      }
//función del temporizador			
function tiempo() { 
     actual=new Date(); //fecha a cada instante
        //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
     cro=actual-emp; //milisegundos transcurridos.
     cr=new Date(); //pasamos el num. de milisegundos a objeto fecha.
     cr.setTime(cro); 
        //obtener los distintos formatos de la fecha:
     cs=cr.getMilliseconds(); //milisegundos 
     cs=cs/10; //paso a centésimas de segundo.
     cs=Math.round(cs); //redondear las centésimas
     sg=cr.getSeconds(); //segundos 
     mn=cr.getMinutes(); //minutos 
     ho=cr.getHours()-1; //horas 
        //poner siempre 2 cifras en los números		 
     if (cs<10) {cs="0"+cs;} 
     if (sg<10) {sg="0"+sg;} 
     if (mn<10) {mn="0"+mn;} 
        //llevar resultado al visor.		 
     visor.innerHTML=ho+" "+mn+" "+sg+" "+cs; 
     }
//parar el cronómetro
function parar() { 
     clearInterval(elcrono); //parar el crono
     marcha=0; //indicar que está parado.
     document.cron.boton2.value="Continuar"; //cambiar el estado del botón
     }		 
//Continuar una cuenta empezada y parada.
function continuar() {
     emp2=new Date(); //fecha actual
     emp2=emp2.getTime(); //pasar a tiempo Unix
     emp3=emp2-cro; //restar tiempo anterior
     emp=new Date(); //nueva fecha inicial para pasar al temporizador 
     emp.setTime(emp3); //datos para nueva fecha inicial.
     elcrono=setInterval(tiempo,10); //activar temporizador
     marcha=1; //indicar que esta en marcha
     document.cron.boton2.value="parar"; //Cambiar estado del botón
     document.cron.boton1.disabled=false; //activar boton 1 si estuviera desactivado
     }
//Volver al estado inicial
function reiniciar() {
     if (marcha==1) {  //si el cronómetro está en marcha:
         clearInterval(elcrono); //parar el crono
         marcha=0;	//indicar que está parado
         }
		     //en cualquier caso volvemos a los valores iniciales
     cro=0; //tiempo transcurrido a cero
     visor.innerHTML = "0 00 00 00"; //visor a cero
     document.cron.boton1.value="Empezar"; //estado inicial primer botón
     document.cron.boton2.value="Parar"; //estado inicial segundo botón
     document.cron.boton2.disabled=true;  //segundo botón desactivado	 
     }	