const nombre = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");
const saludo = document.querySelector("#saludo-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", (event) => {
  var date = new Date();
  var hour = date.getHours();
  var tiempoSaludo = "Buen dia ";
  var inicioSaludo = "Hola";
  var generoSaludo = "Señor";
  // Comprobar Tiempo
  if (hour > 12)
    tiempoSaludo = "Buenas Tardes ";
  if (hour > 16)
    tiempoSaludo = "Buenas Noches ";
  
  // Saludo Paceño
  if (saludo.value == "Pacenio") {
    inicioSaludo = "Como es"
    generoSaludo = "Señor ";
    if (parseInt(edad.value) > 30) {
      if (genero.value == "Femenino")
        generoSaludo = "Señora ";
    }
  }

  // Saludo Cochala
  if (saludo.value == "Cochala") {
    inicioSaludo = "Que tal";
    generoSaludo = "Compadre ";
    if (parseInt(edad.value) > 30){
      if (genero.value == "Femenino")
        generoSaludo = "Comadre ";
    }
  }

  // Saludo Creceño
  if (saludo.value == "Crucenio") {
    inicioSaludo = "Un Saludo";
    generoSaludo = "Don ";
    if (parseInt(edad.value) > 30){
      if (genero.value == "Femenino")
        generoSaludo = "Doña ";
    }
  }

  // Lanzar alert
  alert(inicioSaludo + ", "+ tiempoSaludo + generoSaludo + nombre.value);
});