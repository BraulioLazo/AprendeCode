var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("send-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.classList.add('send-status-open');
      status.innerHTML = "¡Muchísimas gracias por tu mensaje! Me alegra mucho que te hayas tomado el tiempo para escribir. Estaré revisando tu mensaje y te responderé lo más pronto posible. Mientras tanto, sigue explorando y aprendiendo, hay mucho más por descubrir en Aprendecode. ¡Hasta pronto!";
      form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.classList.add('send-status-open');
          status.innerHTML = "¡Oh, parece que algo no salió como esperábamos! Lamentablemente, tu mensaje no pudo ser enviado en este momento. Pero no te preocupes, podrías intentarlo de nuevo en un momento o, si prefieres, puedes contactarme directamente en mi correo electrónico. ¡No permitas que este pequeño obstáculo detenga tu curiosidad y tu deseo de aprender! Estoy aquí para ayudarte.";
        }
      });
    }
  }).catch(error => {
    status.classList.add('send-status-open');
    status.innerHTML = "¡Oh, parece que algo no salió como esperábamos! Lamentablemente, tu mensaje no pudo ser enviado en este momento. Pero no te preocupes, podrías intentarlo de nuevo en un momento o, si prefieres, puedes contactarme directamente en mi correo electrónico. ¡No permitas que este pequeño obstáculo detenga tu curiosidad y tu deseo de aprender! Estoy aquí para ayudarte.";
  });
}
form.addEventListener("submit", handleSubmit);