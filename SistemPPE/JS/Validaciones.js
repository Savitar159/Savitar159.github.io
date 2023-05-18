document.addEventListener("DOMContentLoaded", function() {
  // Obtener los elementos del formulario
  const form = document.querySelector('form');
  const curp = document.querySelector('input[name="curp"]');
  const curpC = document.querySelector('input[name="Curp-c"]');
  const email = document.querySelector('input[name="correo"]');
  const emailC = document.querySelector('input[name="correo-c"]');
  const grado = document.querySelectorAll('input[name="grado"]');
  const privacidad = document.querySelector('input[name="privacidad"]');

  // Función para validar el CURP
function validarCURP() {

  var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
  var validado = curp.value.match(re);

  // Verificar que el CURP tenga 18 caracteres
  if (curp.value.length !== 18) {
    var output = document.getElementById('cv');
    output.innerHTML = '<label class="error">El CURP debe tener 18 caracteres</label>';
    var outputC = document.getElementById('cv-c');
    outputC.innerHTML = '<label class="error">El CURP debe tener 18 caracteres</label>';
    return false;
  }

  if (!validado) {
    var output = document.getElementById('cv');
    output.innerHTML = '<label class="error">No válido</label>';
    var outputC = document.getElementById('cv-c');
    outputC.innerHTML = '<label class="error">No válido</label>';
    return false;
  }

  // Validar que coincida el dígito verificador
  function digitoVerificador(curp17) {
    var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var lngSuma = 0.0;
    var lngDigito = 0.0;
    for (var i = 0; i < 17; i++) {
      lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
    }
    lngDigito = 10 - lngSuma % 10;
    if (lngDigito == 10) return 0;
    return lngDigito;
  }

  if (validado[2] != digitoVerificador(validado[1])) {
    var output = document.getElementById('cv');
    output.innerHTML = '<label class="error">No válido</label>';
    var outputC = document.getElementById('cv-c');
    outputC.innerHTML = '<label class="error">No válido</label>';
    return false;
  }

  // Verificar que los campos sean iguales
  if (curpC.value !== curp.value) {
    var output = document.getElementById('cv');
    output.innerHTML = '<label class="error">No coincide</label>';
    var outputC = document.getElementById('cv-c');
    outputC.innerHTML = '<label class="error">No coincide</label>';
    return false;
  }

  var output = document.getElementById('cv');
  output.innerHTML = '<label class="cool">Listo</label>';
  var outputC = document.getElementById('cv-c');
  outputC.innerHTML = '<label class="cool">Listo</label>';

  return true;
}



 // Función para validar el correo electrónico
function validarEmail() {
  var emailValue = email.value.trim();
  var emailCValue = emailC.value.trim();

  // Verificar que los campos no estén vacíos
  if (emailValue === '' || emailCValue === '') {
    var output = document.getElementById('co');
    output.innerHTML = '<label class="error">Los campos no pueden estar vacíos</label>';
    var outputC = document.getElementById('co-c');
    outputC.innerHTML = '<label class="error">Los campos no pueden estar vacíos</label>';
    return false;
  }

  // Verificar que los campos sean iguales
  if (emailValue !== emailCValue) {
    var output = document.getElementById('co');
    output.innerHTML = '<label class="error">No coinciden</label>';
    var outputC = document.getElementById('co-c');
    outputC.innerHTML = '<label class="error">No coinciden</label>';
    return false;
  }

  var output = document.getElementById('co');
  output.innerHTML = '<label class="cool">Listo</label>';
  var outputC = document.getElementById('co-c');
  outputC.innerHTML = '<label class="cool">Listo</label>';

  return true;
}


  // Función para validar el grado
  function validarSelect() {
  if (grado === '') {
    alert('Selecciona tú grado escolar');
    return false;
  }
  
  return true;
}

function validarCheckbox() {

  if (privacidad.checked) {
    // El checkbox está seleccionado
    return true;
  } else {
    // El checkbox no está seleccionado
      var output = document.getElementById('aviso');
            output.innerHTML = '<label class="error"><br>Debes aceptar los términos y políticas de privacidad</label>';
    return false;
  }
}
  // Función para validar el formulario
  function validarFormulario(evento) {
    // Detener el envío del formulario
    evento.preventDefault();

    // Validar cada campo
    const esValidoCURP = validarCURP();
    const esValidoEmail = validarEmail();
    const esValidoGrado = validarSelect();
    const esValidoPrivacidad = validarCheckbox();

    // Si todos los campos son válidos, enviar el formulario
    if (esValidoCURP && esValidoEmail && esValidoGrado && esValidoPrivacidad) {
      form.submit();
    }
  }

  // Escuchar el evento submit del formulario
  form.addEventListener('submit', validarFormulario);  
  // Escuchar el evento input del campo de correo electrónico
  email.addEventListener('input', validarEmail);

  // Escuchar el evento input del campo de confirmación de correo electrónico
  emailC.addEventListener('input', validarEmail);
    // Escuchar el evento input del campo de curp
  curp.addEventListener('input', validarCURP);

  // Escuchar el evento input del campo de curp
  curpC.addEventListener('input', validarCURP);
  // Escuchar el evento input del campo de privacidad
  privacidad.addEventListener('input', validarCheckbox);
});
