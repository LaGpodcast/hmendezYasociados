<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $solicitud = $_POST["Solicitud"];

  // Compose email message
  $to = "hmendezasociados@gmail.com";
  $subject = "Mensaje enviado desde la página web de Hmendez-Jose & Asociados";
  $message = "Nombre: " . $nombre . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Solicitud: " . $solicitud . "\n";

  // Send email
  $headers = "From: " . $email . "\r\n";
  if (mail($to, $subject, $message, $headers)) {
    // Redirect back to the index.html page
    header("Location: index.html");
    exit;
  } else {
    echo "Error: Unable to send email.";
  }
}
?>