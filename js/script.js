emailjs.init({
  publicKey: "_MqUWuTicMdn2F0iR",
});
 const form = document.getElementById("formulaireContact");

const alertMessage = document.getElementById("alert-message");
var messageDuration = 6000;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const myfname = document.getElementById("fname").value;
  const mylname = document.getElementById("lname").value;
  const myEmail = document.getElementById("email").value;
  const myMessage = document.getElementById("message").value;

  emailjs.sendForm("service_f3dukpo", "template_8dvixa9", form).then(
    () => {
      alertMessage.classList.add("alert-success");
      alertMessage.textContent = "votre message a été envoyé avec succes";
      form.reset();
      console.log(alertMessage);

      setTimeout(function () {
        alertMessage.classList.remove("alert-success");
        alertMessage.style.diplay = "none";
      }, messageDuration);
    },
    (error) => {
      alertMessage.classList.add("alert-echec");
      alertMessage.textContent =
        "une erreur est survenue lors de l envoi de votre message";
      form.reset();
      console.error("FAILED...", error);
    }
  );
}); 


/*emailjs.init({
  publicKey: "R917lvIl2sTfInO8K"
}); 

const form = document.getElementById('formulaireContact'); // Obtenez l'élément de formulaire HTML
const alertMessage = document.getElementById('alert-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.sendForm('service_hs6kclg', 'template_cuudn9f', form)
      .then(() => {
          alertMessage.classList.add('alert-success');
          alertMessage.textContent = 'Votre message a été envoyé avec succès !';
          form.reset();
          setTimeout(() => {
              alertMessage.classList.remove('alert-success');
              alertMessage.textContent = '';
          }, 4000); 
      }, (error) => {
          alertMessage.classList.add('alert-error');
          alertMessage.textContent = 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
          console.error('FAILED...', error);
      });
}); */