<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['text'];
    $to = 'chatainflorian1@gmail.com';
    $subject = 'Nouveau message depuis le formulaire de contact';
    $body = "Nom: $name\nEmail: $email\n\n$message";

    // En-têtes pour l'e-mail
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo '<script>alert("Votre message a été envoyé avec succès.");</script>';
    } else {
        echo '<script>alert("Une erreur est survenue lors de l\'envoi du message.");</script>';
    }
}
?>
